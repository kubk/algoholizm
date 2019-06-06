import { runLengthEncoding } from "./run-length-encoding";

describe("runLengthEncoding", function() {
  it("should work for some examples", function() {
    expect(runLengthEncoding("")).toStrictEqual([]);
    expect(runLengthEncoding("abc")).toStrictEqual([
      [1, "a"],
      [1, "b"],
      [1, "c"]
    ]);
    expect(runLengthEncoding("aab")).toStrictEqual([[2, "a"], [1, "b"]]);
    expect(runLengthEncoding("hello world!")).toStrictEqual([
      [1, "h"],
      [1, "e"],
      [2, "l"],
      [1, "o"],
      [1, " "],
      [1, "w"],
      [1, "o"],
      [1, "r"],
      [1, "l"],
      [1, "d"],
      [1, "!"]
    ]);
    expect(
      runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
    ).toStrictEqual([[34, "a"], [3, "b"]]);
    expect(
      runLengthEncoding(
        "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW"
      )
    ).toStrictEqual([
      [12, "W"],
      [1, "B"],
      [12, "W"],
      [3, "B"],
      [24, "W"],
      [1, "B"],
      [14, "W"]
    ]);
  });
});
