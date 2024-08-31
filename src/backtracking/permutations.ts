import { assert } from 'ts-essentials';

export const permutations = (
  nums: number[],
  currentSet: number[] = [],
  answers: number[][] = []
): number[][] => {
  if (nums.length === 0) {
    answers.push(currentSet.slice());
  }

  for (let i = 0; i < nums.length; i++) {
    const numsCopy = nums.slice();
    const currentNum = numsCopy.splice(i, 1).pop();
    assert(currentNum !== undefined);
    currentSet.push(currentNum);
    permutations(numsCopy, currentSet, answers);
    currentSet.pop();
  }

  return answers;
};

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;
  test('permutations', () => {
    expect(permutations([0, 1])).toEqual([
      [0, 1],
      [1, 0],
    ]);

    expect(permutations([1, 2, 3])).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });
}
