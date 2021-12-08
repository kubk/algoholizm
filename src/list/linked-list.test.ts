import { Node, visit, visitReverse } from './linked-list';

describe('LinkedList', () => {
  const node = {
    value: 'a',
    next: {
      value: 'b',
      next: {
        value: 'c',
        next: {
          value: 'x',
        },
      },
    },
  };

  it('allows to visit recursively', () => {
    let str = '';
    const visitor = (node: Node<string>) => {
      str += node.value;
    };

    visit(node, visitor);

    expect(str).toBe('abcx');
  });

  it('allows to visit recursively in reverse direction', () => {
    let str = '';
    const visitor = (node: Node<string>) => {
      str += node.value;
    };

    visitReverse(node, visitor);

    expect(str).toBe('xcba');
  });
});
