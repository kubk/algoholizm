import { expect, test } from 'vitest';
import { findJudge } from './find-judge';

test('find judge', () => {
  expect(findJudge(2, [[1, 2]])).toBe(2);
  expect(
    findJudge(3, [
      [1, 3],
      [2, 3],
    ])
  ).toBe(3);
  expect(
    findJudge(3, [
      [1, 3],
      [2, 3],
      [3, 1],
    ])
  ).toBe(-1);
  expect(
    findJudge(3, [
      [1, 3],
      [2, 3],
      [3, 3],
    ])
  ).toBe(-1);

  expect(
    findJudge(4, [
      [1, 2],
      [3, 2],
      [1, 3],
      [4, 1],
      [3, 1],
      [2, 1],
      [2, 3],
      [4, 3],
      [4, 2],
      [3, 4],
      [2, 4],
    ])
  ).toBe(-1);
});
