import { permutations } from './permutations';
import { expect, test } from 'vitest';

test('permutations', () => {
  expect(permutations([0, 1])).toEqual([
    [0, 1],
    [1, 0],
  ]);

  expect(permutations([1, 2, 3])).toEqual([
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ]);
});
