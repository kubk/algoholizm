import { Stack } from "./stack";

describe("Stack", () => {
  it("is empty by default", () => {
    const stack = new Stack(5);
    expect(stack.isEmpty()).toBeTruthy();
  });

  it("can be full", () => {
    const stack = new Stack(2);
    expect(stack.isFull()).toBeFalsy();
    stack.push(1);
    stack.push(2);
    expect(stack.isFull()).toBeTruthy();
  });

  it("can pop", () => {
    const stack = new Stack(2);
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  it("allows peek current element", () => {
    const stack = new Stack(2);
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.peek()).toBe(2);
  });
});
