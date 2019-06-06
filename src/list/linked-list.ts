export type Node<T> = {
  value: T;
  next?: Node<T>;
};

type Visitor<T> = (node: Node<T>) => void;

export const visit = <T>(node: Node<T>, visitor: Visitor<T>) => {
  visitor(node);
  if (node.next) {
    visit(node.next, visitor);
  }
};
