export const canSum = (n: number, from: number[]): boolean => {
  if (n === 0) {
    return true;
  }
  if (n < 0) {
    return false;
  }
  return from.some((i) => canSum(n - i, from));
};
