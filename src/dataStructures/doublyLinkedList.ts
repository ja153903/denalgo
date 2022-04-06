class DoublyLinkedListNode<T> {
  val: T;
  next: DoublyLinkedListNode<T> | null;
  prev: DoublyLinkedListNode<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList<T> {
  _head: DoublyLinkedListNode<T> | null;
  _tail: DoublyLinkedListNode<T> | null;

  constructor(defaultValue: T) {
    this._head = new DoublyLinkedListNode<T>(defaultValue);
    this._tail = new DoublyLinkedListNode<T>(defaultValue);

    this._head.next = this._tail;
    this._tail.prev = this._head;
  }

  addTail(val: T) {
    if (!this._tail) {
      return;
    }

    const trueTail = this._tail.prev;
    if (!trueTail) {
      return;
    }

    const node = new DoublyLinkedListNode<T>(val);

    trueTail.next = node;
    node.next = this._tail;
    node.prev = trueTail;
  }

  removeTail(): T | null {
    if (!this._tail) {
      return null;
    }

    const trueTail = this._tail.prev;
    if (!trueTail) {
      return null;
    }

    const prev = trueTail.prev;
    if (!prev) {
      return null;
    }

    prev.next = this._tail;
    this._tail.prev = prev;

    return trueTail?.val ?? null;
  }

  logList(): string {
    let start = this._head?.next ?? null;
    if (!start) {
      return "";
    }

    const result: string[] = [];

    while (start && start !== this._tail) {
      const value: T = start.val;
      result.push(`${value}`);

      start = start.next;
    }

    return result.join("");
  }

  get tail(): T | null {
    return this._tail?.prev?.val ?? null;
  }

  get head(): T | null {
    return this._head?.next?.val ?? null;
  }
}

export { DoublyLinkedList, DoublyLinkedListNode };
