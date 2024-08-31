import { adjacencyListToGraph } from './adjacency-list-to-graph';
import { depthFirstSearch } from './depth-first-search';

export function findIfPathExistsInGraph(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  const graph = adjacencyListToGraph(edges, 'bidirectional');
  return depthFirstSearch(graph, source, destination);
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;
  test('find if path exists in graph', () => {
    expect(
      findIfPathExistsInGraph(
        3,
        [
          [0, 1],
          [1, 2],
          [2, 0],
        ],
        0,
        2
      )
    ).toBeTruthy();
  });
}
