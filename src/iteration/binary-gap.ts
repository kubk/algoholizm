export const binaryGap = (n: number) => {
  let max = 0;
  let currentMax = 0;

  n.toString(2)
    .split('')
    .forEach((char) => {
      if (char === '0') {
        currentMax++;
      }
      if (char === '1') {
        if (currentMax > max) {
          max = currentMax;
        }
        currentMax = 0;
      }
    });

  return max;
};

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;

  test('binary gap', () => {
    expect(binaryGap(9)).toBe(2);
    expect(binaryGap(529)).toBe(4);
    expect(binaryGap(20)).toBe(1);
  });
}
