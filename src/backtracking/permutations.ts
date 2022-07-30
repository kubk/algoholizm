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
