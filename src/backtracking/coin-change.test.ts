import { coinChange } from './coin-change';
import { expect, test } from 'vitest';

test('coin change', () => {
  expect(coinChange(5, [1])).toStrictEqual([[1, 1, 1, 1, 1]]);
  expect(coinChange(5, [1, 2, 4])).toHaveLength(10);
});
