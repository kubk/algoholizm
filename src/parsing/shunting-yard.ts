const operators = <const>['+', '-', '*', '/'];
type Operator = typeof operators[number];
type Operand = number;
const parenthesis = <const>['(', ')'];
type Parenthesis = typeof parenthesis[number];
type Lexeme = Operator | Operand | Parenthesis;

class Stack<Item> {
  constructor(private items: Item[] = []) {}

  peek(): Item | undefined {
    return this.items[this.items.length - 1];
  }

  pop(): Item | undefined {
    return this.items.pop();
  }

  push(item: Item): void {
    this.items.push(item);
  }

  empty(): boolean {
    return this.items.length === 0;
  }
}

const precedence: { [key in Operator]: number } = {
  '*': 3,
  '/': 3,
  '+': 2,
  '-': 2,
};

const isOperator = (value: any): value is Operator => {
  return operators.includes(value);
};

const isFloat = (value: any) => !!(value % 1);
const isOperand = (value: any): value is Operand => {
  return Number.isInteger(value) || isFloat(value);
};

const isParenthesis = (value: any): value is Parenthesis => {
  return parenthesis.includes(value);
};

const lex = (expression: string): Lexeme[] => {
  return expression
    .split(/(\s+|\(|\))/gi)
    .filter((token) => token !== '' && token !== ' ')
    .map((token) => {
      if (isOperator(token) || isParenthesis(token)) {
        return token;
      }
      if (!isNaN(parseFloat(token))) {
        return Number.parseFloat(token);
      }
      throw new Error('Invalid token: ' + token);
    });
};

export const shuntingYard = (expression: string): string => {
  const outputQueue: Lexeme[] = [];
  const operatorStack = new Stack<Operator | Parenthesis>();
  const lexemes = lex(expression);
  lexemes.forEach((lexeme) => {
    if (isOperand(lexeme)) {
      outputQueue.push(lexeme);
    }

    if (lexeme === '(') {
      operatorStack.push(lexeme);
    }

    if (lexeme === ')') {
      if (!operatorStack.peek()) {
        throw new Error('Parenthesis mismatch');
      }
      let openParenthesisFound = false;
      while (!operatorStack.empty()) {
        const prevOperator = operatorStack.pop()!;
        if (prevOperator === '(') {
          openParenthesisFound = true;
        } else {
          outputQueue.push(prevOperator);
        }
      }
      if (!openParenthesisFound) {
        throw new Error('Open parenthesis not found');
      }
    }

    if (isOperator(lexeme)) {
      while (!operatorStack.empty()) {
        const prevOperator = operatorStack.peek()!;
        if (isParenthesis(prevOperator)) {
          break;
        }
        if (precedence[prevOperator] >= precedence[lexeme]) {
          outputQueue.push(operatorStack.pop()!);
        } else {
          break;
        }
      }

      operatorStack.push(lexeme);
    }
  });

  while (!operatorStack.empty()) {
    const operator = operatorStack.pop()!;
    if (isParenthesis(operator)) {
      throw new Error('Parenthesis mismatch');
    }
    outputQueue.push(operator);
  }

  return outputQueue.join(' ');
};
