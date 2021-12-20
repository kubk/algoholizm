import { assert } from 'ts-essentials';
import { mod } from './mod';

// Alphabet is 26 upper cased latin letters. Char codes from 65 to 90
const CHAR_CODE_FROM = 65;
const ALPHABET_SIZE = 26;

export const vigenereCipherEncrypt = (plainText: string, key: string) => {
  assert(plainText.length === key.length);

  return plainText
    .split('')
    .map((letter, i) => {
      const plainTextCode = letter.charCodeAt(0) - CHAR_CODE_FROM;
      const keyCode = key[i].charCodeAt(0) - CHAR_CODE_FROM;
      return String.fromCharCode(mod(plainTextCode + keyCode, ALPHABET_SIZE) + CHAR_CODE_FROM);
    })
    .join('');
};

export const vigenereCipherDecrypt = (cipherText: string, key: string) => {
  assert(cipherText.length === key.length);

  return cipherText
    .split('')
    .map((letter, i) => {
      const cipherCode = letter.charCodeAt(0) - CHAR_CODE_FROM;
      const keyCode = key[i].charCodeAt(0) - CHAR_CODE_FROM;
      return String.fromCharCode(mod(cipherCode - keyCode, ALPHABET_SIZE) + CHAR_CODE_FROM);
    })
    .join('');
};
