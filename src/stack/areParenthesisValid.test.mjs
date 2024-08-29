import { areParenthesisValid } from './areParenthesisValid.mjs';
import { describe, expect, test } from 'vitest';

describe('parenthesis', () => {
  test('parenthesis', () => {
    expect(areParenthesisValid('{}')).toBeTruthy();
    expect(areParenthesisValid('}')).toBeFalsy();
    expect(areParenthesisValid('{')).toBeFalsy();
    expect(areParenthesisValid('{{{}')).toBeFalsy();
    expect(areParenthesisValid('{}}')).toBeFalsy();

    expect(areParenthesisValid('[{}]')).toBeTruthy();
    expect(areParenthesisValid('[{{[]}}]')).toBeTruthy();
    expect(areParenthesisValid('[{[{}]}]')).toBeTruthy();
    expect(areParenthesisValid('[[]]')).toBeTruthy();
    expect(areParenthesisValid('[[[]]')).toBeFalsy();
    expect(areParenthesisValid('[]]')).toBeFalsy();
    expect(areParenthesisValid('[][{}]')).toBeTruthy();

    expect(areParenthesisValid('()')).toBeTruthy();
    expect(areParenthesisValid('((())())')).toBeTruthy();
    expect(areParenthesisValid('((()())')).toBeFalsy();

    expect(areParenthesisValid('()[]{}')).toBeTruthy();
    expect(areParenthesisValid('([{()}])')).toBeTruthy();
    expect(areParenthesisValid('([{(}])')).toBeFalsy();
  });
});
