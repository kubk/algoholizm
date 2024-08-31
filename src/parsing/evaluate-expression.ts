import { shuntingYard } from './shunting-yard';
import { evaluateReversePolishNotation } from './reverse-polish-notation-calculator';

export const evaluateExpression = (expression: string): number => {
  return evaluateReversePolishNotation(shuntingYard(expression));
};

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;
  test('evaluateExpression - should evaluate an expression', () => {
    expect(evaluateExpression('3 + 4 * 2 / ( 1 - 5 )')).toBe(1);
    expect(evaluateExpression('2 / 2 + 3 * 4 - 6')).toBe(7);
  });
}
