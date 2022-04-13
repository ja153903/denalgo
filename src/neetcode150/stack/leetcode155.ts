class _Tuple {
  first: number;
  second: number;

  constructor(first: number, second: number) {
    this.first = first;
    this.second = second;
  }
}

class MinStack {
  private stack: Array<_Tuple>;

  constructor() {
    this.stack = [];
  }

  push(val: number): void {
    const current = new _Tuple(val, val);

    if (!this.stack.length) {
      this.stack.push(current);
      return;
    }

    const min = this.getMin();
    current.second = Math.min(current.second, min);

    this.stack.push(current);
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    const top = this.stack.at(-1);
    if (top === undefined) {
      return 0;
    }

    return top.first;
  }

  getMin(): number {
    const top = this.stack.at(-1);
    if (top === undefined) {
      return 0;
    }

    return top.second;
  }
}

export default MinStack;
