type PatternResultType = number | string | null | PatternResultType[];

type PatternResult<T extends PatternResultType> = { result: T; endPosition: number };
type NullablePatternResult<T extends PatternResultType> = PatternResult<T> | null;

export type NullablePattern<T extends PatternResultType> = (
  match: string,
  startPosition: number
) => NullablePatternResult<T>;

export const text = (
  match: string,
  transform: (value: string) => any = (value) => value
): NullablePattern<string> => {
  return (text, startPosition) => {
    const index = text.substring(startPosition).indexOf(match);
    if (index === 0) {
      return { result: transform(match), endPosition: startPosition + index + match.length };
    }
    return null;
  };
};

export const oneOrMore = <T extends PatternResultType>(
  pattern: NullablePattern<T>,
  transform: (value: T[]) => any = (value) => value
): NullablePattern<T[]> => {
  const newPattern: any = sequence([pattern, optional(defer(() => newPattern))], transform);
  return newPattern;
};

export const optional = <T extends PatternResultType>(
  pattern: NullablePattern<T>
): NullablePattern<T> => {
  return (text, startPosition) => {
    return (
      pattern(text, startPosition) ||
      ({ endPosition: startPosition, result: null } as PatternResult<T>)
    );
  };
};

export const allExcept = <T extends PatternResultType>(
  can: NullablePattern<T>,
  canNot: NullablePattern<T>
): NullablePattern<T> => {
  return (text, startPosition) => {
    if (!canNot(text, startPosition) && can(text, startPosition)) {
      return can(text, startPosition);
    }
    return null;
  };
};

export const any = <T extends PatternResultType>(
  patterns: Array<NullablePattern<T>>
): NullablePattern<T> => {
  return (text, startPosition) => {
    for (const pattern of patterns) {
      const result = pattern(text, startPosition);
      if (result) {
        return result;
      }
    }
    return null;
  };
};

export const sequence = <T extends PatternResultType>(
  patterns: Array<NullablePattern<T | T[]>>,
  transform: (value: T[]) => any = (value) => value
): NullablePattern<T[]> => {
  return (text, startPosition) => {
    const finalResult: NullablePatternResult<T[]> = { result: [], endPosition: startPosition };

    for (const pattern of patterns) {
      const patternResult = pattern(text, finalResult.endPosition);
      if (patternResult) {
        // @ts-ignore
        finalResult.result.push(patternResult.result);
        finalResult.endPosition = patternResult.endPosition;
      } else {
        return null;
      }
    }

    return { ...finalResult, result: transform(finalResult.result) };
  };
};

export const defer = <T extends PatternResultType>(
  getPattern: () => NullablePattern<T>
): NullablePattern<T> => {
  return (text, startPosition) => {
    return getPattern()(text, startPosition);
  };
};
