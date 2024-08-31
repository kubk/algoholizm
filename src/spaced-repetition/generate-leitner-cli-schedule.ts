import { generateLeitnerMatrixSchedule } from './generate-leitner-matrix-schedule';

export const generateLeitnerCliSchedule = (boxes: number[], days: number) => {
  return (
    '\n' +
    generateLeitnerMatrixSchedule(boxes, days).reduce((totalOutput, row) => {
      return (
        totalOutput +
        row.reduce((rowOutput, value) => `${rowOutput}${value ? 'X' : '_'}`, '') +
        '\n'
      );
    }, '')
  );
};

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;

  test('generates leitner schedule in CLI', () => {
    expect(generateLeitnerCliSchedule([1, 2], 3)).toStrictEqual(
      `
_X_
XXX
`
    );

    expect(generateLeitnerCliSchedule([1, 2], 5)).toStrictEqual(`
_X_X_
XXXXX
`);

    expect(generateLeitnerCliSchedule([1, 2, 3], 5)).toStrictEqual(`
__X__
_X_X_
XXXXX
`);

    expect(generateLeitnerCliSchedule([1, 2, 7], 14)).toStrictEqual(`
______X______X
_X_X_X_X_X_X_X
XXXXXXXXXXXXXX
`);
  });
}
