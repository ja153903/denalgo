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

  constructor() {
    this.head = null;
  }

  addTail(val: T) {
    if (this.head === null) {
      this.head = new DoublyLinkedListNode<T>(val);
      return;
    }

    const node = new DoublyLinkedListNode<T>(val);

    const prev = this.head.prev;
    if (prev) {
      node.next = this.head;
      node.prev = prev;
      prev.next = node;
      this.head.prev = node;
    } else {
      this.head.next = node;
      this.head.prev = node;
      node.next = this.head;
      node.prev = this.head;
    }
  }

  removeTail(): T | null {
    if (this.head === null) {
      return null;
    }

    if (this.head && this.head.prev === null || this.head === this.head.prev) {
      const value = this.head.val;
      this.head = null;
      return value;
    }

    const prev = this.head.prev;
    if (prev && prev.prev) {
      prev.prev.next = this.head;
      this.head.prev = prev.prev;
    }

    return prev?.val ?? null;
  }
}

export { DoublyLinkedList, DoublyLinkedListNode };
