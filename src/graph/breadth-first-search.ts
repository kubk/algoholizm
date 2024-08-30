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
