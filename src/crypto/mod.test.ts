import { mod } from './mod';

describe('mod', () => {
  it('calculates a real mathematical modulo instead of just remainder', () => {
    expect(mod(10, 3)).toBe(1);
    expect(mod(-13, 64)).toBe(51);
  });
});
