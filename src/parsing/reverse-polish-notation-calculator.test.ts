import { evaluateReversePolishNotation } from './reverse-polish-notation-calculator';

describe('RPN calculator', () => {
  it('Should parse numbers', () => {
    expect(evaluateReversePolishNotation('3')).toBe(3);
  });
  it('Should support addition', () => {
    expect(evaluateReversePolishNotation('1 3 +')).toBe(4);
  });
  it('Should support multiplication', () => {
    expect(evaluateReversePolishNotation('1 3 *')).toBe(3);
  });
  it('Should support subtraction', () => {
    expect(evaluateReversePolishNotation('1 3 -')).toBe(-2);
  });
  it('Should support division', () => {
    expect(evaluateReversePolishNotation('4 2 /')).toBe(2);
  });
  it('Should support complex RPN', () => {
    expect(evaluateReversePolishNotation('5 1 2 + 4 * + 3.5 -')).toBe(13.5);
  });
});
