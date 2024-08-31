export const cyclicRotation = (a: number[], k: number): number[] => {
  const result: number[] = [];
  for (let i = 0; i < a.length; i++) {
    const nextIndex = (k + i) % a.length;
    result[nextIndex] = a[i];
  }

  return result;
};

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;

  test('cyclic rotation', () => {
    expect(cyclicRotation([1, 2, 3], 1)).toStrictEqual([3, 1, 2]);
    expect(cyclicRotation([3, 8, 9, 7, 6], 3)).toStrictEqual([9, 7, 6, 3, 8]);
  });
}
