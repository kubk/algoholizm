import { binarySearch } from "./binary-search";

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
  { needle: 15, haystack: [2, 4, 6, 10, 15, 25], expectedIndex: 4 }
];

const negativeTestCases: TestCase[] = [
  { needle: 500, haystack: [2, 4, 6, 10, 15, 25], expectedIndex: -1 },
  { needle: 0, haystack: [2], expectedIndex: -1 }
];

describe("BinarySearch", () => {
  it("finds existing element", () => {
    positiveTestCases.forEach(testCase => {
      expect(binarySearch(testCase.haystack, testCase.needle)).toEqual(
        testCase.expectedIndex
      );
    });
  });

  it("do not find non existent element", () => {
    negativeTestCases.forEach(testCase => {
      expect(binarySearch(testCase.haystack, testCase.needle)).toEqual(
        testCase.expectedIndex
      );
    });
  });
});
