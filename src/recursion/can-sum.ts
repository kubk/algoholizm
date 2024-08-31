export const canSum = (n: number, from: number[], cache: Record<number, boolean> = {}): boolean => {
  if (n in cache) {
    return cache[n];
  }
  if (n === 0) {
    return true;
  }
  if (n < 0) {
    return false;
  }
  return from.some((i) => {
    cache[n - i] = canSum(n - i, from, cache);
    return cache[n - i];
  });
};

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;
  test('can sum', () => {
    expect(canSum(7, [5, 3, 4, 7])).toBe(true);
    expect(canSum(7, [5, 3, 4])).toBe(true);
    expect(canSum(7, [2, 4])).toBe(false);
    expect(canSum(7, [2, 3])).toBe(true);
    expect(canSum(300, [7, 14])).toBe(false);
  });
}
