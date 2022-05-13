import { climbStairs } from './climb-stairs';

test('climb stairs', () => {
  // 1 -> 1
  // 2 -> 1+1, 2
  // 3 -> 1+1+1, 2+1, 1+2
  // 4 -> 1+1+1+1, 2+2, 1+1+2, 1+2+1, 2+1+1,
  // 5 -> 1+1+1+1+1, 2+2+1, 2+1+2, 1+2+2, 2+1+1+1, 1+2+1+1, 1+1+2+1, 1+1+1+2

  expect(climbStairs(1)).toBe(1);
  expect(climbStairs(2)).toBe(2);
  expect(climbStairs(3)).toBe(3);
  expect(climbStairs(4)).toBe(5);
  expect(climbStairs(5)).toBe(8);
  expect(climbStairs(44)).toBe(1134903170);
});
