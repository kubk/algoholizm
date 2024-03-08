export const cyclicRotation = (a: number[], k: number): number[] => {
  const result: number[] = [];
  for (let i = 0; i < a.length; i++) {
    const nextIndex = (k + i) % a.length;
    result[nextIndex] = a[i];
  }

  return result;
};
