import { binaryGap } from './binary-gap';
import { expect, test } from 'vitest';

test('binary gap', () => {
  expect(binaryGap(9)).toBe(2);
  expect(binaryGap(529)).toBe(4);
  expect(binaryGap(20)).toBe(1);
});
