export const mod = (a: number, b: number) => {
  const result = a % b;
  return result >= 0 ? result : result + b;
};

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;
  test('mod = calculates a real mathematical modulo instead of just remainder', () => {
    expect(mod(10, 3)).toBe(1);
    expect(mod(-13, 64)).toBe(51);
  });
}
