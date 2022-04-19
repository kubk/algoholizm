import { generateLeitnerCliSchedule } from './generate-leitner-cli-schedule';

test('generates leitner schedule in CLI', () => {
  expect(generateLeitnerCliSchedule([1, 2], 3)).toStrictEqual(
    `
_X_
XXX
`
  );

  expect(generateLeitnerCliSchedule([1, 2], 5)).toStrictEqual(`
_X_X_
XXXXX
`);

  expect(generateLeitnerCliSchedule([1, 2, 3], 5)).toStrictEqual(`
__X__
_X_X_
XXXXX
`);

  expect(generateLeitnerCliSchedule([1, 2, 7], 14)).toStrictEqual(`
______X______X
_X_X_X_X_X_X_X
XXXXXXXXXXXXXX
`);
});
