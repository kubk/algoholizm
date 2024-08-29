import { mod } from './mod';
import { describe, expect, it } from 'vitest';

describe('mod', () => {
  it('calculates a real mathematical modulo instead of just remainder', () => {
    expect(mod(10, 3)).toBe(1);
    expect(mod(-13, 64)).toBe(51);
  });
});
