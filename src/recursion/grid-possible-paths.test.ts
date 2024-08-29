import { gridPossiblePaths } from './grid-possible-paths';
import { expect, test } from 'vitest';

test('possible paths', () => {
  expect(gridPossiblePaths(1, 1)).toBe(1);
  expect(gridPossiblePaths(1, 10)).toBe(1);
  expect(gridPossiblePaths(10, 1)).toBe(1);
  expect(gridPossiblePaths(2, 2)).toBe(2);
  expect(gridPossiblePaths(3, 3)).toBe(6);
  expect(gridPossiblePaths(2, 4)).toBe(4);
});
