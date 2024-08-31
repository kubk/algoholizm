import { expect } from 'vitest';

export const binarySearch = (
  haystack: number[],
  needle: number,
  from = 0,
  optionalTo?: number
): number => {
  const to = optionalTo || haystack.length;
  const indexToCheck = Math.floor((from + to) / 2);
  if (haystack[indexToCheck] === needle) {
    return indexToCheck;
  }
  if (Math.abs(from - to) === 1) {
    return -1;
  }
  if (needle > haystack[indexToCheck]) {
    return binarySearch(haystack, needle, indexToCheck, to);
  }
  return binarySearch(haystack, needle, from, indexToCheck);
};

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;
  type TestCase = {
    needle: number;
    haystack: number[];
    expectedIndex: number;
  };

  const positiveTestCases: TestCase[] = [
    { needle: 2, haystack: [2], expectedIndex: 0 },
    { needle: 2, haystack: [1, 2], expectedIndex: 1 },
    { needle: 2, haystack: [1, 2, 3], expectedIndex: 1 },
    { needle: 6, haystack: [2, 4, 6, 10, 25], expectedIndex: 2 },
    { needle: 4, haystack: [2, 4, 6, 10, 25], expectedIndex: 1 },
    { needle: 4, haystack: [2, 4, 6, 10, 15, 25], expectedIndex: 1 },
    { needle: 10, haystack: [2, 4, 6, 10, 25], expectedIndex: 3 },
    { needle: 2, haystack: [2, 4, 6, 10, 25], expectedIndex: 0 },
    { needle: 25, haystack: [2, 4, 6, 10, 15, 25], expectedIndex: 5 },
    { needle: 15, haystack: [2, 4, 6, 10, 15, 25], expectedIndex: 4 },
  ];

  const negativeTestCases: TestCase[] = [
    { needle: 500, haystack: [2, 4, 6, 10, 15, 25], expectedIndex: -1 },
    { needle: 0, haystack: [2], expectedIndex: -1 },
  ];

  test('BinarySearch - finds existing element', () => {
    positiveTestCases.forEach((testCase) => {
      expect(binarySearch(testCase.haystack, testCase.needle)).toEqual(testCase.expectedIndex);
    });
  });

  test('BinarySearch - do not find non existent element', () => {
    negativeTestCases.forEach((testCase) => {
      expect(binarySearch(testCase.haystack, testCase.needle)).toEqual(testCase.expectedIndex);
    });
  });
}
