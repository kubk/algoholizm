import { vigenereCipherDecrypt, vigenereCipherEncrypt } from './vigenere-cipher';
import { describe, expect, it } from 'vitest';

describe('Vigener cipher', () => {
  it('encrypt / decrypt', () => {
    expect(vigenereCipherEncrypt('ATTACKATDAWN', 'LEMONLEMONLE')).toBe('LXFOPVEFRNHR');
    expect(vigenereCipherDecrypt('LXFOPVEFRNHR', 'LEMONLEMONLE')).toBe('ATTACKATDAWN');
  });
});
