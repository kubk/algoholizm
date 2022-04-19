export const generateLeitnerBoxes = (boxes: number[], day: number) => {
  return boxes.filter((box) => day % box === 0);
};
