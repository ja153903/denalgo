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
  head: DoublyLinkedListNode<T> | null;
  tail: DoublyLinkedListNode<T> | null;

  constructor(defaultValue: T) {
    this.head = new DoublyLinkedListNode<T>(defaultValue);
    this.tail = new DoublyLinkedListNode<T>(defaultValue);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  addTail(val: T) {
    if (!this.tail) {
      return;
    }

    const trueTail = this.tail.prev;
    if (!trueTail) {
      return;
    }

    const node = new DoublyLinkedListNode<T>(val);

    trueTail.next = node;
    node.next = this.tail;
    node.prev = trueTail;
  }

  removeTail(): T | null {
    if (!this.tail) {
      return null;
    }

    const trueTail = this.tail.prev;
    if (!trueTail) {
      return null;
    }

    const prev = trueTail.prev;
    if (!prev) {
      return null;
    }

    prev.next = this.tail;
    this.tail.prev = prev;

    return trueTail?.val ?? null;
  }

  logList(): string {
    let start = this.head?.next ?? null;
    if (!start) {
      return "";
    }

    const result: string[] = [];

    while (start && start !== this.tail) {
      const value: T = start.val;
      result.push(`${value}`);

      start = start.next;
    }

    return result.join("");
  }
}

export { DoublyLinkedList, DoublyLinkedListNode };
