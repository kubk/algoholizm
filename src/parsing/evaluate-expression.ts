import { shuntingYard } from "./shunting-yard";
import { evaluateReversePolishNotation } from "./reverse-polish-notation-calculator";

export const evaluateExpression = (expression: string): number => {
  return evaluateReversePolishNotation(shuntingYard(expression));
};
