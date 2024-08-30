export function findJudge(n: number, trust: number[][]): number {
  const map: Record<number, number[]> = {};
  const notJudges = new Set<number>()

  for (let i = 0; i < trust.length; i++) {
    const connection = trust[i];
    const [from, to] = connection;
    if (!map[to]) {
      map[to] = [];
    }
    notJudges.add(from);
    map[to].push(from);
  }

  const maybeJudges = Object.keys(map);

  for (let i = 0; i < maybeJudges.length; i++) {
    const maybeJudge = parseInt(maybeJudges[i]);
    if (map[maybeJudge]?.length === n - 1 && !notJudges.has(maybeJudge)) {
      return maybeJudge;
    }
  }

  return -1;
}
