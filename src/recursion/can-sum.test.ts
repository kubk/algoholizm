import { canSum } from './can-sum';

test('can sum', () => {
  expect(canSum(7, [5, 3, 4, 7])).toBe(true);
  expect(canSum(7, [5, 3, 4])).toBe(true);
  expect(canSum(7, [2, 4])).toBe(false);
  expect(canSum(7, [2, 3])).toBe(true);
});
