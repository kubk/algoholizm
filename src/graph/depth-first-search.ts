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

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;

  test('dfs', () => {
    const graph = new Map([
      ['a', new Set(['b', 'c'])],
      ['c', new Set(['d'])],
      ['b', new Set(['e'])],
    ]);

    const result: string[] = [];
    depthFirstSearch(graph, 'a', null, (v) => {
      result.push(v);
    });

    expect(result).toEqual(['a', 'c', 'd', 'b', 'e']);
  });

  test('dfs stop', () => {
    const graph = new Map([
      ['a', new Set(['b', 'c'])],
      ['c', new Set(['d'])],
      ['d', new Set(['e'])],
      ['e', new Set(['f'])],
    ]);

    const result: string[] = [];
    depthFirstSearch(graph, 'a', 'd', (v) => {
      result.push(v);
    });

    expect(result).toEqual(['a', 'c', 'd']);
  });

  test('dfs bidirectional - no end', () => {
    const graph = new Map([
      ['a', new Set(['b'])],
      ['b', new Set(['c'])],
      ['c', new Set(['a'])],
    ]);

    const result: string[] = [];
    depthFirstSearch(graph, 'a', null, (v) => {
      result.push(v);
    });
    expect(result).toEqual(['a', 'b', 'c']);
  });

  test('dfs bidirectional - with end', () => {
    const graph = new Map([
      ['a', new Set(['b'])],
      ['b', new Set(['c'])],
      ['a', new Set(['c'])],
    ]);

    const result = depthFirstSearch(graph, 'a', 'c');
    expect(result).toBeTruthy();
  });
}
