const table = {
  I: 1, // or -1
  V: 5,
  X: 10, // or -10
  L: 50,
  C: 100, // or -100
  D: 500,
  M: 1000,
};

export const romanToInt = (str: string) => {
  let sum = 0;
  let carry = 0;

  for (let i = 0; i < str.split('').length; i++) {
    const currentSymbol = str[i] as keyof typeof table;
    const nextSymbol = str[i + 1] as undefined | keyof typeof table;
    if (nextSymbol && table[currentSymbol] < table[nextSymbol]) {
      carry = -1 * table[currentSymbol];
    } else {
      sum += table[currentSymbol] + carry;
      carry = 0;
    }
  }

  return sum;
};
