// https://leetcode.com/problems/all-paths-from-source-to-target/

export function allPathsSourceTarget(graph: number[][]): number[][] {
  const result: number[][] = [];
  const to = graph.length - 1;
  const stack: Array<[number, number[]]> = [[0, []]];

  while (stack.length) {
    const current = stack.pop();
    if (current === undefined) {
      continue;
    }
    const [vertex, path] = current;
    const newPath = path.concat(vertex);

    if (vertex === to) {
      result.push(newPath);
    } else {
      for (let i = 0; i < (graph[vertex] || []).length; i++) {
        stack.push([graph[vertex][i], newPath]);
      }
    }
  }

  return result;
}
