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
      result.unshift(carry)
    }

    return new BigInteger(result);
  }
}

