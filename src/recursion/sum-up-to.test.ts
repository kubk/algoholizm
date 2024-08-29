import { sumUpTo } from './sum-up-to';
import { describe, expect, it } from 'vitest';

describe('sumUpTo', () => {
  it('calculates sum', () => {
    expect(sumUpTo(0)).toBe(0);
    expect(sumUpTo(1)).toBe(1);
    expect(sumUpTo(4)).toBe(10);
  });
});
