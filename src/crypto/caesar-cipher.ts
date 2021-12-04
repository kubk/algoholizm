// Alphabet is 26 upper cased latin letters. Char codes from 65 to 90
const CHAR_CODE_FROM = 65;

export const caesarCipherEncrypt = (string: string, shiftBy: number) => {
  return string
    .split('')
    .map((letter) => {
      const newCharCode = (letter.charCodeAt(0) + shiftBy - CHAR_CODE_FROM) % 26 + CHAR_CODE_FROM;
      return String.fromCharCode(newCharCode);
    })
    .join('');
};

export const caesarCipherDecrypt = (string: string, shiftBy: number) => {
  return string
    .split('')
    .map((letter) => {
      const newCharCode = (letter.charCodeAt(0) - shiftBy - CHAR_CODE_FROM) % 26 + CHAR_CODE_FROM;
      return String.fromCharCode(newCharCode);
    })
    .join('');
};
