import { caesarCipherDecrypt, caesarCipherEncrypt } from './caesar-cipher';

describe('Caesar cipher', () => {
  it('decrypt / encrypt', () => {
    expect(caesarCipherEncrypt('AAB', 3)).toBe('DDE');
    expect(caesarCipherDecrypt('DDE', 3)).toBe('AAB');
    expect(caesarCipherEncrypt('ZAB', 3)).toBe('CDE');
    expect(caesarCipherDecrypt('CDE', 3)).toBe('ZAB');
  });
});
