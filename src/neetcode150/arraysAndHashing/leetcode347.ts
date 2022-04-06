import PriorityQueue from "../../dataStructures/priorityQueue.ts";
import { generateCounter } from "../../algorithms/utility/counter.ts";

function topKFrequent(nums: number[], k: number): number[] {
  const pq = new PriorityQueue<number>();
  const counter = generateCounter<number>(nums);

  for (const [num, count] of counter) {
    // create min heap
    pq.push(num, -count);
  }

  while (pq.length > k) {
    pq.pop();
  }

  return pq.heap.map(({ value }) => value);
}

export default topKFrequent;
