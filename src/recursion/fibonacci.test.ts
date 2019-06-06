import { fibonacci } from "./fibonacci";

describe("fibonacci", () => {
  it("should calculate n-th fibonacci number in a sequence", () => {
    const expectedSequence = [1, 1, 2, 3, 5, 8, 13];
    for (let i = 1; i < expectedSequence.length; i++) {
      expect(fibonacci(i)).toBe(expectedSequence[i - 1]);
    }
  });
});
