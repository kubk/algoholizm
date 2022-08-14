export const canSum = (n: number, from: number[], cache: Record<number, boolean> = {}): boolean => {
  if (n in cache) {
    return cache[n]
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
