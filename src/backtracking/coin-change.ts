export const coinChange = (
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
      coinChange(nextN, coins, answers, currentAnswer);
      currentAnswer.pop();
    }
  }

  return answers;
};
