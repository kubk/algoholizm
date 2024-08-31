import { generateLeitnerBoxes } from './generate-leitner-boxes';
import { range } from './range';

export const generateLeitnerMatrixSchedule = (boxes: number[], days: number) => {
  return boxes
    .map((box) => {
      return range(1, days).map((day) => {
        return generateLeitnerBoxes(boxes, day).includes(box) ? 1 : 0;
      });
    })
    .reverse();
};

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;

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
}
