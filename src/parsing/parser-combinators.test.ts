import {
  any,
  defer,
  NullablePattern,
  oneOrMore,
  optional,
  sequence,
  text,
} from './parser-combinators';
import { expect, test } from 'vitest';

const clearAndJoinArrayIntoString = (array: string[]) =>
  array
    .flat()
    .filter((value) => value !== null)
    .join('');

test('text', () => {
  expect(text('1')('abc', 0)).toStrictEqual(null);
  expect(text('a')('abc', 0)).toStrictEqual({ result: 'a', endPosition: 1 });
  expect(text('a')('abc', 1)).toStrictEqual(null);
});

test('optional', () => {
  expect(optional(text('1'))('abc', 0)).toStrictEqual({ result: null, endPosition: 0 });
  expect(optional(text('a'))('abc', 0)).toStrictEqual({ result: 'a', endPosition: 1 });
});

test('any - letters', () => {
  const aOrBOrC = any([text('a'), text('b'), text('c')]);
  expect(aOrBOrC('a', 0)).toBeTruthy();
  expect(aOrBOrC('d', 0)).toBeFalsy();
});

test('any - digit', () => {
  const anyDigit = any([
    text('0'),
    text('1'),
    text('2'),
    text('3'),
    text('4'),
    text('5'),
    text('6'),
    text('7'),
    text('8'),
    text('9'),
  ]);
  expect(anyDigit('11', 0)).toStrictEqual({ result: '1', endPosition: 1 });
  expect(anyDigit('12', 1)).toStrictEqual({ result: '2', endPosition: 2 });
  expect(anyDigit('Phone +1234', 8)).toStrictEqual({ result: '2', endPosition: 9 });
});

test('sequence - abc', () => {
  const aThenB = sequence([text('abc'), text('def')]);

  expect(aThenB('abcdef', 0)).toStrictEqual({ result: ['abc', 'def'], endPosition: 6 });
  expect(aThenB('abcde7', 0)).toBeFalsy();
});

test('oneOrMore', () => {
  const anyDigit = any([
    text('0'),
    text('1'),
    text('2'),
    text('3'),
    text('4'),
    text('5'),
    text('6'),
    text('7'),
    text('8'),
    text('9'),
  ]);
  const number = oneOrMore(anyDigit, clearAndJoinArrayIntoString);
  expect(number('1235', 0)!.result).toStrictEqual('1235');
  expect(number('Phone +1234', 7)).toStrictEqual({ result: '1234', endPosition: 11 });
  expect(number('Phone +1234', 6)).toStrictEqual(null);
});

test('integration - PHP union type parser', () => {
  const flattenAndClear = (array: string[]) => array.flat().filter((value) => value !== null);

  const optionalWhitespace = optional(oneOrMore(text(' '), () => null));
  // prettier-ignore
  const primitive = any([
    text('bool'),
    text('null'),
    text('int'),
    text('string'),
  ]);
  // prettier-ignore
  const unionType: NullablePattern<string[]> = sequence(
    [
      primitive,
      optional(sequence([
        optionalWhitespace,
        text('|', () => null),
        optionalWhitespace,
        optional(defer(() => unionType))
      ], flattenAndClear)),
    ],
    flattenAndClear
  );

  // Table-driven tests
  const table = [
    { input: 'string|string|string', expected: ['string', 'string', 'string'] },
    {
      input: 'string| string | string| string  |    string',
      expected: ['string', 'string', 'string', 'string', 'string'],
    },
    { input: 'int|int|int', expected: ['int', 'int', 'int'] },
    { input: 'null|null|null', expected: ['null', 'null', 'null'] },
    { input: 'bool|bool|bool', expected: ['bool', 'bool', 'bool'] },
    { input: 'string|bool', expected: ['string', 'bool'] },
    { input: 'bool|string', expected: ['bool', 'string'] },
    { input: 'int|bool|string|null', expected: ['int', 'bool', 'string', 'null'] },
  ];

  table.forEach(({ input, expected }) => {
    expect(unionType(input, 0)!.result).toStrictEqual(expected);
  });
});

test('integration - simple HTML parser', () => {
  const tagName = any([text('div'), text('p'), text('h1'), text('span')]);
  const anyLettersAbc = oneOrMore(
    any([text('a'), text('b'), text('c')]),
    clearAndJoinArrayIntoString
  );

  // prettier-ignore
  const html: NullablePattern<string[]> = sequence(
    [
      text('<'),
      tagName,
      text('>'),
      oneOrMore(
        any([anyLettersAbc, defer(() => html) as any]),
        (array) => array.filter((value) => value !== null),
      ),
      text('</'),
      tagName,
      text('>'),
    ],
    (value) => ({
      tag: value[1],
      children: value[3],
    })
  );

  const ast = html('<div><h1>aaa</h1><p>bb</p><div><span>c</span></div></div>', 0)!.result;

  expect(ast).toMatchSnapshot();
});
