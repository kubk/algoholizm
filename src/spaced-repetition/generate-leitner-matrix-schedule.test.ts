import { generateLeitnerMatrixSchedule } from './generate-leitner-matrix-schedule';
import { expect, test } from 'vitest';

test('generates a leitner schedule in a form of matrix', () => {
  expect(generateLeitnerMatrixSchedule([1, 2], 3)).toStrictEqual([
    [0, 1, 0],
    [1, 1, 1],
  ]);

  expect(generateLeitnerMatrixSchedule([1, 2], 5)).toStrictEqual([
    [0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1],
  ]);

  expect(generateLeitnerMatrixSchedule([1, 2, 3], 5)).toStrictEqual([
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1],
  ]);

  expect(generateLeitnerMatrixSchedule([1, 2, 7], 14)).toStrictEqual([
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ]);
});
