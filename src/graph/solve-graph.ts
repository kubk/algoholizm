/**
 Implement a function solveGraph accepting 3 arguments in the given order:

 start - The initial node of the directed graph
 end - The destination node of the directed graph
 arcs - A directed graph represented by a list/array of directed edges
 and returns a boolean value depending on whether the destination node can be reached from the initial node by traversing zero or more directed edges. That means that if the start and end nodes are identical then the end node is trivially considered to be reachable - return true/True in this case. Also, if the start and end nodes are distinct and either node does not appear in arcs then you should return false/False since there is no sequence of directed edges that you may traverse to reach the end node from the start node.

 You may not assume any properties of the given directed graph (other than the fact that it is a directed graph) - for example, the given directed graph may contain multiple edges (in either direction) between two nodes or contain loops (directed edges starting and finishing on the same node).
 */

interface Edge {
  start: string;
  end: string;
}

export const solveGraph = (
  start: string,
  end: string,
  graph: Edge[],
  visited: Edge[] = []
): boolean => {
  if (start === end) {
    return true;
  }

  for (let i = 0; i < graph.length; i++) {
    const edge = graph[i];
    if (edge.start === start) {
      if (edge.end === end) {
        return true;
      }
      if (!visited.find((edge) => edge.start === start && edge.end === end)) {
        visited.push({ start: start, end: end });
        const found = solveGraph(edge.end, end, graph, visited);
        if (found) {
          return true;
        }
      }
    }
  }

  return false;
};

if (import.meta.vitest) {
  const { test, expect, describe } = import.meta.vitest;

  describe('Simple graph with 1 arc', () => {
    const graph = [{ start: 'a', end: 'b' }];
    test('Should reach b', () => {
      expect(solveGraph('a', 'b', graph)).toBe(true);
    });
    test('Should never reach c', () => {
      expect(solveGraph('a', 'c', graph)).toBe(false);
    });
    test('Should reach start state', () => {
      expect(solveGraph('a', 'a', graph)).toBe(true);
    });
  });

  describe('Complex graph with loops and intermediary nodes', () => {
    const graph = [
      { start: 'a', end: 'b' },
      { start: 'b', end: 'c' },
      { start: 'c', end: 'a' },
      { start: 'c', end: 'd' },
      { start: 'e', end: 'a' },
    ];
    test('Should reach d', () => {
      expect(solveGraph('a', 'd', graph)).toBe(true);
    });
    test('Should never reach nodes with no graph leading to it', () => {
      expect(solveGraph('a', 'e', graph)).toBe(false);
    });
    test('Should reach all nodes in a loop', () => {
      expect(solveGraph('a', 'a', graph)).toBe(true);
      expect(solveGraph('a', 'b', graph)).toBe(true);
      expect(solveGraph('a', 'c', graph)).toBe(true);
    });
  });
}
