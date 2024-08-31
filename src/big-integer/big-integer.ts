export class BigInteger {
  constructor(public list: number[]) {}

  add(other: BigInteger) {
    let result: number[] = [];

    let carry = 0;
    for (let i = this.list.length - 1; i >= 0; i--) {
      const sum = this.list[i] + other.list[i] + carry;
      if (sum > 9) {
        const left = sum % 10;
        result[i] = left;
        carry = Math.floor((sum - left) / 10);
      } else {
        result[i] = sum;
        carry = 0;
      }
    }

    if (carry > 0) {
      result.unshift(carry);
    }

    return new BigInteger(result);
  }
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;
  test('BigInteger', () => {
    expect(new BigInteger([2, 4, 3]).add(new BigInteger([5, 6, 4])).list).toStrictEqual([8, 0, 7]);
    expect(new BigInteger([0]).add(new BigInteger([0])).list).toStrictEqual([0]);

    expect(
      new BigInteger([
        5, 4, 5, 4, 5, 6, 4, 6, 8, 4, 4, 5, 6, 4, 5, 4, 6, 8, 4, 6, 4, 6, 4, 5, 4, 5, 4, 5,
      ]).add(
        new BigInteger([
          4, 2, 5, 6, 4, 5, 6, 4, 8, 4, 4, 6, 4, 6, 8, 4, 8, 6, 4, 8, 6, 4, 8, 6, 4, 8, 6, 4,
        ])
      ).list
    ).toStrictEqual([
      9, 7, 1, 1, 0, 2, 1, 1, 6, 8, 9, 2, 1, 1, 3, 9, 5, 4, 9, 5, 1, 1, 3, 1, 9, 4, 0, 9,
    ]);
  });
}
