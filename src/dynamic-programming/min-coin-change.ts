export const minCoinChange = (coins: number[], n: number): number => {
  const s = new Array(n + 1).fill(Infinity);
  s[0] = 0;

  for (let i = 1; i <= n; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        s[i] = Math.min(s[i - coin] + 1, s[i] || Infinity);
      }
    }
  }

  return s[n] === Infinity ? -1 : s[n];
};

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest;

  test('min coin change', () => {
    expect(minCoinChange([2, 1, 5], 11)).toBe(3);
    expect(minCoinChange([1, 2, 5], 11)).toBe(3);
    expect(minCoinChange([1, 3, 4], 6)).toBe(2);
    expect(minCoinChange([1, 2, 5], 10)).toBe(2);
    expect(minCoinChange([1, 2, 5], 5)).toBe(1);
    expect(minCoinChange([3], 4)).toBe(-1);
    expect(minCoinChange([186, 419, 83, 408], 6249)).toBe(20);
  });
}
