/**
 Print a linked list items in turn and in reverse direction
 */

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

export const visitReverse = <T>(node: Node<T>, visitor: Visitor<T>) => {
  if (node.next) {
    visitReverse(node.next, visitor);
  }
  visitor(node);
};
