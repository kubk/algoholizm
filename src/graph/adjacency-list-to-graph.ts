export const adjacencyListToGraph = <T>(
  list: T[][],
  type: 'unidirectional' | 'bidirectional'
): Map<T, Set<T>> => {
  const map = new Map<T, Set<T>>();

  for (let i = 0; i < list.length; i++) {
    const [from, to] = list[i];

    if (!map.has(from)) {
      map.set(from, new Set());
    }
    map.get(from)?.add(to);

    if (type === 'bidirectional') {
      if (!map.has(to)) {
        map.set(to, new Set());
      }
      map.get(to)?.add(from);
    }
  }

  return map;
};
