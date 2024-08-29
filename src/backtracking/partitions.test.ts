import { partitions } from './partitions';
import { expect, test } from 'vitest';

test('partition', () => {
  expect(partitions(2, 2)).toStrictEqual([[2], [1, 1]]);
  expect(partitions(3, 2)).toStrictEqual([
    [2, 1],
    [1, 2],
    [1, 1, 1],
  ]);
});
