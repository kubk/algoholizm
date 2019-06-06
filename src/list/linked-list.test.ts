import { Node, visit } from "./linked-list";

describe("LinkedList", () => {
  it("allows to visit recursively", () => {
    const node = {
      value: "a",
      next: {
        value: "b",
        next: {
          value: "c",
          next: {
            value: "x"
          }
        }
      }
    };

    let str = "";
    const visitor = (node: Node<string>) => {
      str += node.value;
    };

    visit(node, visitor);

    expect(str).toBe("abcx");
  });
});
