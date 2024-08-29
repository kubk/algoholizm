import { findOccurrencesInArray } from './find-occurances-in-array';
import { expect, test } from 'vitest';

test('find occurrences in array', () => {
  expect(findOccurrencesInArray([9, 3, 9, 3, 9, 7, 9])).toBe(7);
});
