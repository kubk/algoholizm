import { vigenereCipherDecrypt, vigenereCipherEncrypt } from './vigenere-cipher';

describe('Vigener cipher', () => {
  it('encrypt / decrypt', () => {
    expect(vigenereCipherEncrypt('ATTACKATDAWN', 'LEMONLEMONLE')).toBe('LXFOPVEFRNHR');
    expect(vigenereCipherDecrypt('LXFOPVEFRNHR', 'LEMONLEMONLE')).toBe('ATTACKATDAWN');
  });
});
