export const allPossibleCoinChanges = (
  n: number,
  coins: number[],
  answers: number[][] = [],
  currentAnswer: number[] = []
) => {
  if (n === 0) {
    answers.push(currentAnswer.slice());
  }

  for (let i = 0; i < coins.length; i++) {
    const nextN = n - coins[i];
    if (nextN >= 0) {
      currentAnswer.push(coins[i]);
      allPossibleCoinChanges(nextN, coins, answers, currentAnswer);
      currentAnswer.pop();
    }
  }

  return answers;
};

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest;

  test('coin change', () => {
    expect(allPossibleCoinChanges(5, [1])).toStrictEqual([[1, 1, 1, 1, 1]]);
    expect(allPossibleCoinChanges(5, [1, 2, 4])).toMatchInlineSnapshot(`
    [
      [
        1,
        1,
        1,
        1,
        1,
      ],
      [
        1,
        1,
        1,
        2,
      ],
      [
        1,
        1,
        2,
        1,
      ],
      [
        1,
        2,
        1,
        1,
      ],
      [
        1,
        2,
        2,
      ],
      [
        1,
        4,
      ],
      [
        2,
        1,
        1,
        1,
      ],
      [
        2,
        1,
        2,
      ],
      [
        2,
        2,
        1,
      ],
      [
        4,
        1,
      ],
    ]
  `);
  });
}
