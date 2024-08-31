import { mod } from './mod';

// Alphabet is 26 upper-cased latin letters. Char codes from 65 to 90
const CHAR_CODE_FROM = 65;
const ALPHABET_SIZE = 26;

export const caesarCipherEncrypt = (string: string, shiftBy: number) => {
  return string
    .split('')
    .map((letter) => {
      const newCharCode =
        ((letter.charCodeAt(0) + shiftBy - CHAR_CODE_FROM) % ALPHABET_SIZE) + CHAR_CODE_FROM;
      return String.fromCharCode(newCharCode);
    })
    .join('');
};

export const caesarCipherDecrypt = (string: string, shiftBy: number) => {
  return string
    .split('')
    .map((letter) => {
      let difference = letter.charCodeAt(0) - CHAR_CODE_FROM - shiftBy;
      return String.fromCharCode(mod(difference, ALPHABET_SIZE) + CHAR_CODE_FROM);
    })
    .join('');
};

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;
  test('Caesar cipher - decrypt / encrypt', () => {
    expect(caesarCipherEncrypt('AAB', 3)).toBe('DDE');
    expect(caesarCipherDecrypt('DDE', 3)).toBe('AAB');
    expect(caesarCipherEncrypt('ZAB', 3)).toBe('CDE');
    expect(caesarCipherDecrypt('CDE', 3)).toBe('ZAB');
  });
}
