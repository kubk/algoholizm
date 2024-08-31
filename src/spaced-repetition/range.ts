export const range = (from: number, to: number) => {
  return Array(to)
    .fill(null)
    .map((_, index) => index + from);
};

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;
  test('generates range between', () => {
    expect(range(0, 5)).toStrictEqual([0, 1, 2, 3, 4]);
    expect(range(1, 3)).toStrictEqual([1, 2, 3]);
  });
}
