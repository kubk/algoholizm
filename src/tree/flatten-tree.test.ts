import { flattenTree } from "./flatten-tree";

describe("flattenTree", () => {
  it("should flat a tree", () => {
    const input = {
      a: {
        b: {
          c: 12,
          d: "Hello World"
        },
        e: [1, 2, 3]
      }
    };

    const output = {
      "a/b/c": 12,
      "a/b/d": "Hello World",
      "a/e": [1, 2, 3]
    };

    expect(flattenTree(input)).toStrictEqual(output);
  });
});
