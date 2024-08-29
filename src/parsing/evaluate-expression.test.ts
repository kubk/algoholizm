import { evaluateExpression } from './evaluate-expression';
import { describe, expect, it } from 'vitest';

describe('evaluateExpression', () => {
  it('should evaluate an expression', () => {
    expect(evaluateExpression('3 + 4 * 2 / ( 1 - 5 )')).toBe(1);
    expect(evaluateExpression('2 / 2 + 3 * 4 - 6')).toBe(7);
  });
});
