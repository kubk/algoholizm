export const mod = (a: number, b: number) => {
  const result = a % b;
  return result >= 0 ? result : result + b;
};
