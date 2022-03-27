import PriorityQueue from "../../dataStructures/priorityQueue.ts";

function findKthLargest(nums: number[], k: number): number {
  // maintain  heap of size k
  // when our heap is greater than k, we pop the minimum value
  const pq = new PriorityQueue<number>();

  for (const num of nums) {
    pq.push(num, -num);

    if (pq.length > k) {
      pq.pop();
    }
  }

  const { value } = pq.pop() ?? {};

  return value ?? -1;
}

export default findKthLargest;
