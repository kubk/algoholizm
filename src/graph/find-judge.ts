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
