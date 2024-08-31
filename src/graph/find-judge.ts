export function findJudge(n: number, trust: number[][]): number {
  if (trust.length === 0) return 1;

  const fromToMap: Record<number, number[]> = {};
  const toFromMap: Record<number, number[]> = {};

  for (let i = 0; i < trust.length; i++) {
    const connection = trust[i];
    const [from, to] = connection;

    if (!toFromMap[to]) {
      toFromMap[to] = [];
    }
    toFromMap[to].push(from);

    if (!fromToMap[from]) {
      fromToMap[from] = [];
    }
    fromToMap[from].push(to);
  }

  const maybeJudges = Object.keys(toFromMap);

  for (let i = 0; i < maybeJudges.length; i++) {
    const maybeJudge = parseInt(maybeJudges[i]);
    if (toFromMap[maybeJudge]?.length === n - 1 && !fromToMap[maybeJudge]) {
      return maybeJudge;
    }
  }

  return -1;
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;

  test('find judge', () => {
    expect(findJudge(2, [[1, 2]])).toBe(2);
    expect(
      findJudge(3, [
        [1, 3],
        [2, 3],
      ])
    ).toBe(3);
    expect(
      findJudge(3, [
        [1, 3],
        [2, 3],
        [3, 1],
      ])
    ).toBe(-1);
    expect(
      findJudge(3, [
        [1, 3],
        [2, 3],
        [3, 3],
      ])
    ).toBe(-1);

    expect(
      findJudge(4, [
        [1, 2],
        [3, 2],
        [1, 3],
        [4, 1],
        [3, 1],
        [2, 1],
        [2, 3],
        [4, 3],
        [4, 2],
        [3, 4],
        [2, 4],
      ])
    ).toBe(-1);
  });
}
