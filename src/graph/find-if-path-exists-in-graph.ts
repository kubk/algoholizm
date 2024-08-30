import { adjacencyListToGraph } from './adjacency-list-to-graph';
import { dfs } from './dfs';

export function findIfPathExistsInGraph(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  const graph = adjacencyListToGraph(edges, 'bidirectional');
  return dfs(graph, source, destination);
}
