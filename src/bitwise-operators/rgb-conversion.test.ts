import { numToRgb, rgbToNum } from './rgb-conversion';
import { describe, expect, it } from 'vitest';

describe('RGB pack / unpack', () => {
  it('num to rgb', () => {
    // -1 because colors are counted from 0
    // that's why the max value of rgb number is 16777215 not 16777216
    const fff = 2 ** 24 - 1;
    expect(numToRgb(fff)).toStrictEqual({ r: 255, g: 255, b: 255 });
    expect(rgbToNum({ r: 255, g: 255, b: 255 })).toBe(fff);
  });
});
