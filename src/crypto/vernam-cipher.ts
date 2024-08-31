import { assert } from 'ts-essentials';

export const vernamCipherEncrypt = (plainText: string): { cipherText: string; key: number[] } => {
  const key = new Array(plainText.length).fill(0).map((i) => Math.round(Math.random() * 100));
  const cipherText = plainText
    .split('')
    .map((letter, i) => {
      return String.fromCharCode(letter.charCodeAt(0) ^ key[i]);
    })
    .join('');

  return {
    cipherText,
    key,
  };
};

export const vernamCipherDecrypt = (cipherText: string, key: number[]) => {
  assert(cipherText.length === key.length);
  return cipherText
    .split('')
    .map((letter, i) => {
      return String.fromCharCode(letter.charCodeAt(0) ^ key[i]);
    })
    .join('');
};

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;
  test('Vernam cipher - decrypt / encrypt', () => {
    const plainText = 'attackatonce';
    const { cipherText, key } = vernamCipherEncrypt(plainText);
    expect(cipherText).not.toBe(plainText);
    expect(vernamCipherDecrypt(cipherText, key)).toBe(plainText);
  });
}
