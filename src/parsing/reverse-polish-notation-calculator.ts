/**
 Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

 For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.

 For your convenience, the input is formatted such that a space is provided between every token.

 Empty expression should evaluate to 0.

 Valid operations are +, -, *, /.

 You may assume that there won't be exceptional situations (like stack underflow or division by zero).
 */

const operators = <const>["+", "-", "*", "/"];
type Operator = typeof operators[number];
type Operand = number;
type Operation = (a: Operand, b: Operand) => Operand;
type Lexeme = Operator | Operand;

const operations: { [key in Operator]: Operation } = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b
};

const isOperator = (value: any): value is Operator => {
  return operators.includes(value);
};

const isFloat = (value: any) => !!(value % 1);
const isOperand = (value: any): value is Operand => {
  return Number.isInteger(value) || isFloat(value);
};

export const evaluateReversePolishNotation = (rpn: string): number => {
  const lexemes = lex(rpn);
  const stack: Lexeme[] = [];
  lexemes.forEach(lexeme => {
    if (isOperator(lexeme)) {
      const operation = operations[lexeme];
      const right = stack.pop();
      if (right === undefined || !isOperand(right)) {
        throw new Error("Invalid operand: " + right);
      }
      const left = stack.pop();
      if (left === undefined || !isOperand(left)) {
        throw new Error("Invalid operand: " + left);
      }
      const result = operation(left, right);
      stack.push(result);
    }
    if (isOperand(lexeme)) {
      stack.push(lexeme);
    }
  });
  const evaluated = stack.pop();
  if (typeof evaluated === "undefined") {
    throw new Error("Invalid expression");
  }
  if (isOperator(evaluated)) {
    throw new Error("Invalid expression");
  }
  return evaluated;
};

const lex = (expression: string): Lexeme[] => {
  return expression
    .split(/(\s+|\(|\))/gi)
    .filter(token => token !== "" && token !== " ")
    .map(token => {
      if (isOperator(token)) {
        return token;
      }
      if (!isNaN(parseFloat(token))) {
        return Number.parseFloat(token);
      }
      throw new Error("Invalid token: " + token);
    });
};
