export const fibonacci = (nth: number): number => {
  if (nth <= 1) {
    return nth;
  }
  return fibonacci(nth - 1) + fibonacci(nth - 2);
};

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;
  test('fibonacci - should calculate n-th fibonacci number in a sequence', () => {
    const expectedSequence = [1, 1, 2, 3, 5, 8, 13];
    for (let i = 1; i < expectedSequence.length; i++) {
      expect(fibonacci(i)).toBe(expectedSequence[i - 1]);
    }
  });
}
