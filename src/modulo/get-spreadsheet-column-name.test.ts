import { getSpreadsheetColumnName } from './get-spreadsheet-column-name';

test('spreadsheet columns', () => {
  expect(getSpreadsheetColumnName(1)).toBe('A');
  expect(getSpreadsheetColumnName(2)).toBe('B');
  expect(getSpreadsheetColumnName(26)).toBe('Z');
  expect(getSpreadsheetColumnName(27)).toBe('AA');
  expect(getSpreadsheetColumnName(28)).toBe('BB');
  expect(getSpreadsheetColumnName(53)).toBe('AAA');
  expect(getSpreadsheetColumnName(54)).toBe('BBB');
});
