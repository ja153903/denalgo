/**
 * Priority Queue is an extension of the queue with the following properties:
 *
 * Every item has a priority associated with it.
 * An element with high priority is dequeued before an element with low priority.
 * If two elements have the same priority, they are served according to their order in the queue.
 *
 * A Binary Heap is a Binary Tree with the following properties:
 *
 * It is a Complete Tree. This property of Binary Heap makes them suitable to be stored in an array.
 * A Binary Heap is either Min Heap or Max Heap.
 * In a Min Binary Heap, the key at the root must be minimum among all keys present in Binary Heap. The same property must be recursively true for all nodes in Binary Tree.
 * Similarly, in a Max Binary Heap, the key at the root must be maximum among all keys present in Binary Heap. The same property must be recursively true for all nodes in Binary Tree.
 *
 * Pattern: (item, priority) we can flip the polarity of priority to get MinHeap otherwise default is MaxHeap
 */

class PriorityQueueNode<T> {
  value: T;
  priority: number;

  constructor(value: T, priority: number) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue<T> {
  heap: Array<PriorityQueueNode<T>>;
  size: number;

  constructor() {
    this.heap = [];
    this.size = -1;
  }

  push(item: T, priority: number) {
    const node = new PriorityQueueNode<T>(item, priority);

    this.size += 1;
    this.heap.push(node);

    this.shiftUp(this.size);
  }

  pop(): PriorityQueueNode<T> | null {
    if (this.heap.length) {
      const result = this.heap[0];

      this.heap[0] = this.heap[this.size];
      // In our implementation, we need to pop
      this.heap.pop();
      this.size -= 1;

      this.shiftDown(0);

      return result;
    }

    return null;
  }

  peek(): PriorityQueueNode<T> | null {
    if (this.heap.length) {
      return this.heap[0];
    }

    return null;
  }

  get length(): number {
    return this.heap.length;
  }

  shiftUp(i: number) {
    while (
      i > 0 && this.heap[this.getParent(i)].priority < this.heap[i].priority
    ) {
      const pi = this.getParent(i);
      const temp = this.heap[pi];
      this.heap[pi] = this.heap[i];
      this.heap[i] = temp;

      i = pi;
    }
  }

  shiftDown(i: number) {
    let maxIndex = i;

    const left = this.getLeftChild(i);

    if (
      left <= this.size &&
      this.heap[left].priority > this.heap[maxIndex].priority
    ) {
      maxIndex = left;
    }

    const right = this.getRightChild(i);

    if (
      right <= this.size &&
      this.heap[right].priority > this.heap[maxIndex].priority
    ) {
      maxIndex = right;
    }

    if (i !== maxIndex) {
      const temp = this.heap[i];
      this.heap[i] = this.heap[maxIndex];
      this.heap[maxIndex] = temp;

      this.shiftDown(maxIndex);
    }
  }

  getParent(i: number): number {
    return Math.floor((i - 1) / 2);
  }

  getLeftChild(i: number): number {
    return 2 * i + 1;
  }

  getRightChild(i: number): number {
    return 2 * i + 2;
  }
}

export { PriorityQueueNode };
export default PriorityQueue;
