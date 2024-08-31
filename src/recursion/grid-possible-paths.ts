/**
 * You are given two integers representing the size of a grid.
 * Using the size of the grid, the length, and breadth of the grid. We need to find the number of unique paths from the top left corner of the grid to the bottom right corner.
 * There is one another constraint on the direction of movement, at any point of time, one can move only in either down or right direction.
 */
export const gridPossiblePaths = (n: number, m: number): number => {
  if (n === 1 || m === 1) {
    return 1;
  }
  return gridPossiblePaths(n - 1, m) + gridPossiblePaths(n, m - 1);
};

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;
  test('possible paths', () => {
    expect(gridPossiblePaths(1, 1)).toBe(1);
    expect(gridPossiblePaths(1, 10)).toBe(1);
    expect(gridPossiblePaths(10, 1)).toBe(1);
    expect(gridPossiblePaths(2, 2)).toBe(2);
    expect(gridPossiblePaths(3, 3)).toBe(6);
    expect(gridPossiblePaths(2, 4)).toBe(4);
  });
}
