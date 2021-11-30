import { assert } from 'ts-essentials';

type TruthTable = [
  ['0', '0', '0' | '1'],
  ['0', '1', '0' | '1'],
  ['1', '0', '0' | '1'],
  ['1', '1', '0' | '1']
];

const reverseString = (string: string) => string.split('').reverse().join('');

export class BitwiseNumber {
  constructor(public string: string) {
    assert(string.length === 32, `Expected 32, given ${string.length}`);
  }

  add(other: BitwiseNumber): BitwiseNumber {
    let string = '';

    let unit = 0;
    for (let i = 31; i >= 0; i--) {
      const thisBit = parseInt(this.string[i], 10);
      const otherBit = parseInt(other.string[i], 10);
      if (thisBit === 1 && otherBit === 1) {
        string = (unit ? '1' : '0') + string;
        unit = 1;
      } else {
        string = thisBit + otherBit + unit + string;
        unit = 0;
      }
    }

    return new BitwiseNumber(string);
  }

  toDecimal(): number {
    let accumulator = 0;

    for (let i = 0; i < 31; i++) {
      const thisBit = parseInt(this.string[31 - i], 10);
      if (thisBit === 1) {
        accumulator += 2 ** i;
      }
    }

    return accumulator;
  }

  static fromDecimal(number: number): BitwiseNumber {
    const divider = 2;
    let string = '';
    let quotient = number;

    while (quotient >= divider) {
      const remainder = quotient % divider;
      quotient = Math.floor(quotient / divider);
      string += remainder.toString();
    }

    string += '1';

    return new BitwiseNumber(reverseString(string).padStart(32, '0'));
  }

  and(other: BitwiseNumber): BitwiseNumber {
    return this.applyTruthTable(other, [
      ['0', '0', '0'],
      ['0', '1', '0'],
      ['1', '0', '0'],
      ['1', '1', '1'],
    ]);
  }

  or(other: BitwiseNumber): BitwiseNumber {
    return this.applyTruthTable(other, [
      ['0', '0', '0'],
      ['0', '1', '1'],
      ['1', '0', '1'],
      ['1', '1', '1'],
    ]);
  }

  xor(other: BitwiseNumber): BitwiseNumber {
    return this.applyTruthTable(other, [
      ['0', '0', '0'],
      ['0', '1', '1'],
      ['1', '0', '1'],
      ['1', '1', '0'],
    ]);
  }

  private applyTruthTable(other: BitwiseNumber, truthTable: TruthTable): BitwiseNumber {
    let string = '';

    for (let i = 0; i < 32; i++) {
      const a = this.string[i];
      const b = other.string[i];

      const matchingRow = truthTable.find(row => row[0] === a && row[1] === b);
      assert(matchingRow);

      string += matchingRow[2];
    }

    return new BitwiseNumber(string);
  }

  not(): BitwiseNumber {
    let string = '';

    for (let i = 0; i < 32; i++) {
      string += (this.string[i] === '1' ? '0' : '1');
    }

    return new BitwiseNumber(string).add(new BitwiseNumber('00000000000000000000000000000001'));
  }

  isTruthy() {
    return this.string !== '00000000000000000000000000000000';
  }
}
