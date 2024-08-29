import { describe, expect, it } from 'vitest';
import { shuntingYard } from './shunting-yard';

describe('Shunting Yard', () => {
  it('should convert basic expression', () => {
    expect(shuntingYard('3 + 4')).toBe('3 4 +');
    expect(shuntingYard('3 + 4 * 2')).toBe('3 4 2 * +');
    expect(shuntingYard('2 + 2 + 2')).toBe('2 2 + 2 +');
    expect(shuntingYard('(2 + 2) * 2')).toBe('2 2 + 2 *');
    expect(shuntingYard('3 + 4 * 2 / ( 1 - 5 )')).toBe('3 4 2 * 1 5 - / +');
    expect(shuntingYard('3.5 + 4 * 2 / ( 1 - 5.2 )')).toBe('3.5 4 2 * 1 5.2 - / +');
  });

  it('throws on invalid expression', () => {
    expect(() => {
      shuntingYard('2 + 3)');
    }).toThrow('Open parenthesis not found');
  });
});
