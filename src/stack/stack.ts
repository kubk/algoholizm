export class StackOverflow extends Error {}
export class EmptyStack extends Error {}

export class Stack<T> {
  private values: T[] = [];
  private pointer = -1;

  constructor(private size: number) {}

  push(value: T): void {
    if (this.isFull()) {
      throw new StackOverflow();
    }
    this.pointer++;
    this.values.push(value);
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      throw new EmptyStack();
    }
    return this.values[this.pointer--];
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      throw new EmptyStack();
    }
    return this.values[this.pointer];
  }

  isFull(): boolean {
    return this.pointer === this.size - 1;
  }

  isEmpty(): boolean {
    return this.pointer === -1;
  }
}

if (import.meta.vitest) {
  const { expect, describe, it } = import.meta.vitest;
  describe('Stack', () => {
    it('is empty by default', () => {
      const stack = new Stack(5);
      expect(stack.isEmpty()).toBeTruthy();
    });

    it('can be full', () => {
      const stack = new Stack(2);
      expect(stack.isFull()).toBeFalsy();
      stack.push(1);
      stack.push(2);

      expect(stack.isFull()).toBeTruthy();
      expect(() => {
        stack.push(3);
      }).toThrow(StackOverflow);
    });

    it('can pop', () => {
      const stack = new Stack(2);
      stack.push(1);
      stack.push(2);
      expect(stack.pop()).toBe(2);
      expect(stack.pop()).toBe(1);
    });

    it('allows peek current element', () => {
      const stack = new Stack(2);
      stack.push(1);
      stack.push(2);
      expect(stack.peek()).toBe(2);
      expect(stack.peek()).toBe(2);
    });
  });
}
