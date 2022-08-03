import { coinChange } from './coin-change';

test('coin change', () => {
  expect(coinChange(5, [1])).toStrictEqual([[1,1,1,1,1]])
  expect(coinChange(5, [1,2, 4])).toHaveLength(10)
})
