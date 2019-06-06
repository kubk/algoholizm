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
      if (!visited.find(edge => edge.start === start && edge.end === end)) {
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
