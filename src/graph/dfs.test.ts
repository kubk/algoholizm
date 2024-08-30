import { expect, test } from 'vitest';
import { dfs } from './dfs';

test('dfs', () => {
  const graph = new Map([
    ['a', new Set(['b', 'c'])],
    ['c', new Set(['d'])],
    ['b', new Set(['e'])],
  ]);

  const result: string[] = [];
  dfs(graph, 'a', null, (v) => {
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
  dfs(graph, 'a', 'd', (v) => {
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
  dfs(graph, 'a', null, (v) => {
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

  const result = dfs(graph, 'a', 'c');
  expect(result).toBeTruthy();
});
