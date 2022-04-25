class _DoublyListNode {
  key: number;
  value: number;
  next: _DoublyListNode | null;
  prev: _DoublyListNode | null;

  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  private capacity: number;
  private cache: Map<number, _DoublyListNode>;
  private head: _DoublyListNode | null;
  private tail: _DoublyListNode | null;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new _DoublyListNode(0, 0);
    this.tail = new _DoublyListNode(0, 0);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number): number {
    const node = this.cache.get(key) ?? null;
    if (node) {
      this.moveToHead(node);
      return node.value;
    }

    return -1;
  }

  put(key: number, value: number): void {
    const node = this.cache.get(key) ?? null;
    if (!node) {
      const newNode = new _DoublyListNode(key, value);
      this.cache.set(key, newNode);
      this.addNode(newNode);
      if (this.atCapacity) {
        const lru = this.popTail();
        if (lru) {
          this.cache.delete(lru.key);
        }
      } 
    } else {
      node.value = value;
      this.moveToHead(node);
    }
  }

  get atCapacity(): boolean {
    return this.capacity < this.cache.size;
  }

  moveToHead(node: _DoublyListNode) {
    this.removeNode(node);
    this.addNode(node);
  }

  addNode(node: _DoublyListNode) {
    if (this.head) {
      node.prev = this.head;
      node.next = this.head.next;
    }

    if (this.head?.next) {
      this.head.next.prev = node;
      this.head.next = node;
    }
  }

  removeNode(node: _DoublyListNode) {
    const prev = node.prev;
    const next = node.next;

    if (prev && next) {
      prev.next = next;
      next.prev = prev;
    }
  }

  popTail(): _DoublyListNode | null {
    const tail = this.tail?.prev ?? null;
    if (tail) {
      this.removeNode(tail);
    }

    return tail;
  }
}

export default LRUCache;
