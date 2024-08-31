export const breadthFirstSearch = <T>(
  graph: Map<T, Set<T>>,
  start: T,
  cb?: (vertex: T) => void
) => {
  const queue = [start];

  while (queue.length) {
    const current = queue.shift();
    if (current === undefined) {
      continue;
    }
    cb?.(current);
    queue.push(...(graph.get(current) || []));
  }
};

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;
  test('bfs', () => {
    const graph = new Map([
      ['a', new Set(['b', 'c'])],
      ['c', new Set(['d'])],
      ['b', new Set(['e'])],
    ]);

    const result: string[] = [];
    breadthFirstSearch(graph, 'a', (v) => {
      result.push(v);
    });

    expect(result).toEqual(['a', 'b', 'c', 'e', 'd']);
  });
}
