import { range } from './range';
import { expect, test } from 'vitest';

test('generates range between', () => {
  expect(range(0, 5)).toStrictEqual([0, 1, 2, 3, 4]);
  expect(range(1, 3)).toStrictEqual([1, 2, 3]);
});
