export const linearSearch = <T>(needle: T, haystack: T[]): number | null => {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return i;
    }
  }
  return null;
};

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;
  test('linear search - should find an item', () => {
    const index = linearSearch(1, [2, 3, 4, 5, 61, 1, 4]);
    expect(index).toEqual(5);
  });

  test('linear search - should not find not existent item', () => {
    const index = linearSearch(29, [2, 3, 4, 5, 61, 1, 4]);
    expect(index).toEqual(null);
  });
}
