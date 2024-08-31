/**
 * Write a function that counts the number of ways you can
 * partition n objects using parts up to m (m >= 0)
 */
export const partitions = (
  n: number,
  m: number,
  currentAnswer: number[] = [],
  answers: number[][] = []
) => {
  if (n <= 0) {
    answers.push(currentAnswer.slice());
    return answers;
  }

  for (let i = m; i > 0; i--) {
    const nextN = n - i;
    if (nextN >= 0) {
      currentAnswer.push(i);
      partitions(nextN, m, currentAnswer, answers);
      currentAnswer.pop();
    }
  }

  return answers;
};

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;
  test('partition', () => {
    expect(partitions(2, 2)).toStrictEqual([[2], [1, 1]]);
    expect(partitions(3, 2)).toStrictEqual([
      [2, 1],
      [1, 2],
      [1, 1, 1],
    ]);
  });
}
