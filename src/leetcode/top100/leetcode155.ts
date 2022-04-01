class _Pair<T, S> {
  first: T;
  second: S;

  constructor(first: T, second: S) {
    this.first = first;
    this.second = second;
  }
}

class MinStack {
  records: Array<_Pair<number, number>>;

  constructor() {
    this.records = [];
  }

  push(val: number): void {
    if (this.records.length) {
      const min = Math.min(val, this.getMin());
      this.records.push(new _Pair<number, number>(val, min));
    } else {
      this.records.push(new _Pair<number, number>(val, val));
    }
  }

  pop(): void {
    this.records.pop();
  }

  top(): number {
    const last = this.records[this.records.length - 1];

    return last.first;
  }

  getMin(): number {
    const last = this.records[this.records.length - 1];

    return last.second;
  }
}

export default MinStack;
