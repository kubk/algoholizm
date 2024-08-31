export const fibonacci = (n: number) => {
  const result = [];
  result[0] = 1;
  result[1] = 1;

  for (let i = 2; i < n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  return result[n - 1];
};

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest;

  test('fibonacci', () => {
    const expectedSequence = [1, 1, 2, 3, 5, 8, 13];

    for (let i = 1; i < expectedSequence.length; i++) {
      expect(fibonacci(i)).toBe(expectedSequence[i - 1]);
    }
  });
}
