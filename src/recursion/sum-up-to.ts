export const sumUpTo = (n: number): number => {
  if (n === 0) {
    return 0;
  }
  return n + sumUpTo(n - 1);
};
