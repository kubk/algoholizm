export const bubbleSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
};

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest;
  test('should sort an array', () => {
    expect(bubbleSort([4, 2, 3, 1])).toStrictEqual([1, 2, 3, 4]);
  });
}
