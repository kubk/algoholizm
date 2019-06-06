export const fibonacci = (nth: number): number => {
  if (nth <= 1) {
    return nth;
  }
  return fibonacci(nth - 1) + fibonacci(nth - 2);
};
