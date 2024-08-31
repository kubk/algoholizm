export const sumUpTo = (n: number): number => {
  if (n === 0) {
    return 0;
  }
  return n + sumUpTo(n - 1);
};

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;
  test('sumUpTo - calculates sum', () => {
    expect(sumUpTo(0)).toBe(0);
    expect(sumUpTo(1)).toBe(1);
    expect(sumUpTo(4)).toBe(10);
  });
}
