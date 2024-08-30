export const depthFirstSearch = <T>(
  graph: Map<T, Set<T>>,
  start: T,
  end: T | null,
  cb?: (vertex: T) => void,
  visited = new Set<T>()
): boolean => {
  const stack = [start];

  while (stack.length) {
    const current = stack.pop();
    if (current === undefined) {
      return false;
    }
    if (visited.has(current)) {
      continue;
    }
    visited.add(current);
    cb?.(current);
    if (end !== null && current === end) {
      return true;
    }

    const children = graph.get(current) || new Set();
    stack.push(...children);
  }

  return false;
};
