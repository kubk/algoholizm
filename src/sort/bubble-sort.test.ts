import { bubbleSort } from "./bubble-sort";

describe("BubbleSort", () => {
  it("should sort an array", () => {
    expect(bubbleSort([4, 2, 3, 1])).toStrictEqual([1, 2, 3, 4]);
  });
});
