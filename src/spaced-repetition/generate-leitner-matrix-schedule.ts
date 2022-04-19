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
