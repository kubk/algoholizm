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
