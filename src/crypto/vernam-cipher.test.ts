import { vernamCipherDecrypt, vernamCipherEncrypt } from './vernam-cipher';

describe('Vernam cipher', () => {
  it('decrypt / encrypt', () => {
    const plainText = 'attackatonce';
    const { cipherText, key } = vernamCipherEncrypt(plainText);
    expect(cipherText).not.toBe(plainText);
    expect(vernamCipherDecrypt(cipherText, key)).toBe(plainText);
  });
});
