// Given a column number, return its alphabetical column id.
// For example, given 1, return "A". Given 27, return "AA".
const ALPHABET_LENGTH = 26;

export const getSpreadsheetColumnName = (num: number) => {
  const numAfterModulo = num > ALPHABET_LENGTH ? num % ALPHABET_LENGTH : num;
  const repeatTimes = Math.ceil(num / ALPHABET_LENGTH);

  let result = '';
  for (let i = 0; i < repeatTimes; i++) {
    result += String.fromCharCode(64 + numAfterModulo);
  }

  return result;
};
