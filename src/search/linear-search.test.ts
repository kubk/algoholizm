import { linearSearch } from "./linear-search";

describe("LinearSearch", () => {
  it("should find an item", () => {
    const index = linearSearch(1, [2, 3, 4, 5, 61, 1, 4]);
    expect(index).toEqual(5);
  });

  it("should not find not existent item", () => {
    const index = linearSearch(29, [2, 3, 4, 5, 61, 1, 4]);
    expect(index).toEqual(null);
  });
});
