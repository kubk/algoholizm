import { calc } from "./reverse-polish-notation-calculator";

describe("RPN calculator", () => {
  it("Should parse numbers", () => {
    expect(calc("3")).toBe(3);
  });
  it("Should support addition", () => {
    expect(calc("1 3 +")).toBe(4);
  });
  it("Should support multiplication", () => {
    expect(calc("1 3 *")).toBe(3);
  });
  it("Should support subtraction", () => {
    expect(calc("1 3 -")).toBe(-2);
  });
  it("Should support division", () => {
    expect(calc("4 2 /")).toBe(2);
  });
  it("Should support complex RPN", () => {
    expect(calc("5 1 2 + 4 * + 3 -")).toBe(14);
  });
});
