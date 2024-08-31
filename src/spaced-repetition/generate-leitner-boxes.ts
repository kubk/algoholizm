export const generateLeitnerBoxes = (boxes: number[], day: number) => {
  return boxes.filter((box) => day % box === 0);
};

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;
  test('generates leitner boxes for intervals 1, 2, 7', () => {
    const boxes = [1, 2, 7];
    expect(generateLeitnerBoxes(boxes, 1)).toStrictEqual([1]);
    expect(generateLeitnerBoxes(boxes, 2)).toStrictEqual([1, 2]);
    expect(generateLeitnerBoxes(boxes, 3)).toStrictEqual([1]);
    expect(generateLeitnerBoxes(boxes, 4)).toStrictEqual([1, 2]);
    expect(generateLeitnerBoxes(boxes, 5)).toStrictEqual([1]);
    expect(generateLeitnerBoxes(boxes, 6)).toStrictEqual([1, 2]);
    expect(generateLeitnerBoxes(boxes, 7)).toStrictEqual([1, 7]);
    expect(generateLeitnerBoxes(boxes, 8)).toStrictEqual([1, 2]);
    expect(generateLeitnerBoxes(boxes, 9)).toStrictEqual([1]);
    expect(generateLeitnerBoxes(boxes, 14)).toStrictEqual([1, 2, 7]);
  });
}
