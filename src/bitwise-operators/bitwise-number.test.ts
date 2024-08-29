import { BitwiseNumber } from './bitwise-number';
import { describe, expect, it } from 'vitest';

describe('BitwiseNumber', () => {
  it('adds 1 + 0', () => {
    const a = new BitwiseNumber('00000000000000000000000000000000');
    const b = new BitwiseNumber('00000000000000000000000000000001');

    expect(a.add(b).string).toBe('00000000000000000000000000000001');

    expect(
      new BitwiseNumber('11111111111111111111111111111011').add(BitwiseNumber.fromDecimal(1)).string
    ).toBe('11111111111111111111111111111100');
  });

  it('adds 1 + 1', () => {
    const a = new BitwiseNumber('00000000000000000000000000000001');
    const b = new BitwiseNumber('00000000000000000000000000000001');

    expect(a.add(b).string).toBe('00000000000000000000000000000010');
  });

  it('converts to decimal', () => {
    expect(new BitwiseNumber('00000000000000000000000100111010').toDecimal()).toBe(314);
    expect(new BitwiseNumber('00000000000000000000000011111111').toDecimal()).toBe(255);
  });

  it('converts from decimal', () => {
    expect(BitwiseNumber.fromDecimal(61).string).toBe('00000000000000000000000000111101');
    expect(BitwiseNumber.fromDecimal(314).string).toBe('00000000000000000000000100111010');
    expect(BitwiseNumber.fromDecimal(255).string).toBe('00000000000000000000000011111111');
  });

  it('applies & (AND) operation', () => {
    const a = new BitwiseNumber('00000000000000000000000000001001');
    const b = new BitwiseNumber('00000000000000000000000000001110');

    expect(a.and(b).string).toBe('00000000000000000000000000001000');
  });

  it('applies ^ (XOR) operation', () => {
    const a = new BitwiseNumber('00000000000000000000000000001001');
    const b = new BitwiseNumber('00000000000000000000000000001110');

    expect(a.xor(b).string).toBe('00000000000000000000000000000111');
  });

  it('inverts sign', () => {
    const a = new BitwiseNumber('00000000000000000000000100111010');

    expect(a.not().string).toBe('11111111111111111111111011000110');
    expect(a.not().not().string).toBe('00000000000000000000000100111010');
  });

  it('shift bit left & right', () => {
    expect(new BitwiseNumber('00000000000000000000000000000100').shiftLeft(2).string).toBe(
      '00000000000000000000000000010000'
    );
    expect(BitwiseNumber.fromDecimal(9).shiftLeft(2).toDecimal()).toBe(36);

    expect(new BitwiseNumber('00000000000000000000000000000100').shiftRight(2).string).toBe(
      '00000000000000000000000000000001'
    );
    expect(BitwiseNumber.fromDecimal(100).shiftRight(3).toDecimal()).toBe(12);
  });

  it('integration test - XOR can be used to encrypt and decrypt message', () => {
    const message = BitwiseNumber.fromDecimal(9);
    const key = BitwiseNumber.fromDecimal(10);

    expect(message.xor(key).toDecimal()).not.toBe(9);
    expect(message.xor(key).xor(key).toDecimal()).toBe(9);
  });

  it('integration test - permission management', () => {
    const r = new BitwiseNumber('00000000000000000000000000000100');
    const w = new BitwiseNumber('00000000000000000000000000000010');
    const x = new BitwiseNumber('00000000000000000000000000000001');

    let permission = r.or(w);
    expect(permission.and(r).isTruthy()).toBeTruthy();
    expect(permission.and(w).isTruthy()).toBeTruthy();
    expect(permission.and(x).isTruthy()).toBeFalsy();
  });

  it('integration - toggle, clears and sets bits', () => {
    // number | (1 << bitNumber) == 6
    const setBit = (number: BitwiseNumber, bitNumber: number) => {
      return number.or(BitwiseNumber.fromDecimal(1).shiftLeft(bitNumber));
    };
    // number ^ (1 << bitNumber) == 4
    const toggleBit = (number: BitwiseNumber, bitNumber: number) => {
      return number.xor(BitwiseNumber.fromDecimal(1).shiftLeft(bitNumber));
    };

    expect(setBit(new BitwiseNumber('00000000000000000000000000000100'), 0).string).toBe(
      '00000000000000000000000000000101'
    );
    expect(setBit(new BitwiseNumber('00000000000000000000000000000100'), 1).string).toBe(
      '00000000000000000000000000000110'
    );
    expect(setBit(new BitwiseNumber('00000000000000000000000000000100'), 2).string).toBe(
      '00000000000000000000000000000100'
    );

    expect(toggleBit(new BitwiseNumber('00000000000000000000000000000110'), 1).string).toBe(
      '00000000000000000000000000000100'
    );
    expect(toggleBit(new BitwiseNumber('00000000000000000000000000000100'), 1).string).toBe(
      '00000000000000000000000000000110'
    );
  });
});
