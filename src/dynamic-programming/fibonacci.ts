export const fibonacci = (n: number) => {
  const result = [];
  result[0] = 1;
  result[1] = 1;

  for (let i = 2; i < n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  return result[n - 1];
};
