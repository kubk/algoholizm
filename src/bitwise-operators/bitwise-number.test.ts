import { BitwiseNumber } from './bitwise-number';

describe('BitwiseNumber', () => {
  it('adds 1 + 0', () => {
    const a = new BitwiseNumber('00000000000000000000000000000000');
    const b = new BitwiseNumber('00000000000000000000000000000001');

    expect(a.add(b).string).toBe('00000000000000000000000000000001');
  });

  it('adds 1 + 1', () => {
    const a = new BitwiseNumber('00000000000000000000000000000001');
    const b = new BitwiseNumber('00000000000000000000000000000001');

    expect(a.add(b).string).toBe('00000000000000000000000000000010');
  });

  it('converts to decimal', () => {
    expect((new BitwiseNumber('00000000000000000000000100111010')).toDecimal()).toBe(314)
    expect((new BitwiseNumber('00000000000000000000000011111111')).toDecimal()).toBe(255)
  })

  it('converts from decimal', () => {
    expect(BitwiseNumber.fromDecimal(61).string).toBe('00000000000000000000000000111101')
    expect(BitwiseNumber.fromDecimal(314).string).toBe('00000000000000000000000100111010')
    expect(BitwiseNumber.fromDecimal(255).string).toBe('00000000000000000000000011111111')
  })

  it('applies & (AND) operation', () => {
    const a = new BitwiseNumber('00000000000000000000000000001001');
    const b = new BitwiseNumber('00000000000000000000000000001110');

    expect(a.and(b).string).toBe('00000000000000000000000000001000')
  })

  it('applies ^ (XOR) operation', () => {
    const a = new BitwiseNumber('00000000000000000000000000001001');
    const b = new BitwiseNumber('00000000000000000000000000001110');

    expect(a.xor(b).string).toBe('00000000000000000000000000000111')
  })

  it('inverts sign', () => {
    const a = new BitwiseNumber('00000000000000000000000100111010');

    expect(a.not().string).toBe('11111111111111111111111011000110');
  });

  it('integration test - XOR can be used to encrypt and decrypt message', () => {
    const message = BitwiseNumber.fromDecimal(9);
    const key = BitwiseNumber.fromDecimal(10);

    expect(message.xor(key).toDecimal()).not.toBe(9);
    expect(message.xor(key).xor(key).toDecimal()).toBe(9);
  })

  it('integration test - permission management', () => {
    const r = new BitwiseNumber('00000000000000000000000000000100');
    const w = new BitwiseNumber('00000000000000000000000000000010');
    const x = new BitwiseNumber('00000000000000000000000000000001');

    const permission = r.or(w);

    const canReadFile = permission.and(r);
    const canWriteFile = permission.and(w);
    const canExecuteFile = permission.and(x);

    expect(canReadFile.isTruthy()).toBeTruthy();
    expect(canWriteFile.isTruthy()).toBeTruthy();
    expect(canExecuteFile.isTruthy()).toBeFalsy();
  })
})
