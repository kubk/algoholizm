const symbols = {
  '}': '{',
  ']': '[',
  ')': '(',
};

export const areParenthesisValid = (s: any) => {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c in symbols) {
      const result = stack.pop();
      // @ts-expect-error
      if (result !== symbols[c]) {
        return false;
      }
    } else {
      stack.push(c);
    }
  }

  return stack.length === 0;
};

if (import.meta.vitest) {
  const { describe, test, expect } = import.meta.vitest;
  describe('parenthesis', () => {
    test('parenthesis', () => {
      expect(areParenthesisValid('{}')).toBeTruthy();
      expect(areParenthesisValid('}')).toBeFalsy();
      expect(areParenthesisValid('{')).toBeFalsy();
      expect(areParenthesisValid('{{{}')).toBeFalsy();
      expect(areParenthesisValid('{}}')).toBeFalsy();

      expect(areParenthesisValid('[{}]')).toBeTruthy();
      expect(areParenthesisValid('[{{[]}}]')).toBeTruthy();
      expect(areParenthesisValid('[{[{}]}]')).toBeTruthy();
      expect(areParenthesisValid('[[]]')).toBeTruthy();
      expect(areParenthesisValid('[[[]]')).toBeFalsy();
      expect(areParenthesisValid('[]]')).toBeFalsy();
      expect(areParenthesisValid('[][{}]')).toBeTruthy();

      expect(areParenthesisValid('()')).toBeTruthy();
      expect(areParenthesisValid('((())())')).toBeTruthy();
      expect(areParenthesisValid('((()())')).toBeFalsy();

      expect(areParenthesisValid('()[]{}')).toBeTruthy();
      expect(areParenthesisValid('([{()}])')).toBeTruthy();
      expect(areParenthesisValid('([{(}])')).toBeFalsy();
    });
  });
}
