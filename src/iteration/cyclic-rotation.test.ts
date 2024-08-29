import { cyclicRotation } from './cyclic-rotation';
import { expect, test } from 'vitest';

test('cyclic rotation', () => {
  expect(cyclicRotation([1, 2, 3], 1)).toStrictEqual([3, 1, 2]);
  expect(cyclicRotation([3, 8, 9, 7, 6], 3)).toStrictEqual([9, 7, 6, 3, 8]);
});
