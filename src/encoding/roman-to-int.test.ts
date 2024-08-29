import { romanToInt } from './roman-to-int';
import { expect, test } from 'vitest';

test('roman to int', () => {
  // Sum
  expect(romanToInt('III')).toBe(3);
  expect(romanToInt('LVIII')).toBe(58);
  // Sum + subtract
  expect(romanToInt('IV')).toBe(4);
  expect(romanToInt('MCMXCIV')).toBe(1994);
});
