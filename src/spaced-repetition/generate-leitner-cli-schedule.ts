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
