import PriorityQueue from "../../dataStructures/priorityQueue.ts";

class MedianFinder {
  smallHeap: PriorityQueue<number>;
  largeHeap: PriorityQueue<number>;

  constructor() {
    // always size k
    // is max heap of smaller items
    this.smallHeap = new PriorityQueue<number>();

    // either size k or k + 1
    // is min heap of larger items
    this.largeHeap = new PriorityQueue<number>();
  }

  addNum(num: number) {
    if (this.smallHeap.length === this.largeHeap.length) {
      // in this case, we insert the number into the small heap
      // and then pop the max value from the small heap and insert
      // that value into the larger heap
      this.smallHeap.push(num, num);
      const maxValue = this.smallHeap.pop();
      if (maxValue) {
        this.largeHeap.push(maxValue.value, -maxValue.priority);
      }
    } else {
      this.largeHeap.push(num, -num);
      const minValue = this.largeHeap.pop()
      if (minValue) {
        this.smallHeap.push(minValue.value, -minValue.priority);
      }
    }
  }

  findMedian(): number {
    if (this.smallHeap.length === this.largeHeap.length) {
      // we have to return the average of two middle elements
      const minValue = this.largeHeap.peek();
      const maxValue = this.smallHeap.peek();

      if (minValue && maxValue) {
        return (minValue.value + maxValue.value) / 2.0;
      }

      return 0;
    }
      return this.largeHeap.peek()?.value ?? 0;
  }
}

export default MedianFinder;
