import { expect, test } from 'vitest';
import { breadthFirstSearch } from './breadth-first-search';

test('bfs', () => {
  const graph = new Map([
    ['a', new Set(['b', 'c'])],
    ['c', new Set(['d'])],
    ['b', new Set(['e'])],
  ]);

  const result: string[] = [];
  breadthFirstSearch(graph, 'a', (v) => {
    result.push(v);
  });

  expect(result).toEqual(['a', 'b', 'c', 'e', 'd']);
});
