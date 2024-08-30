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
