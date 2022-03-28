import PriorityQueue from "../../dataStructures/priorityQueue.ts";
import { generateCounter } from "../../algorithms/utility/counter.ts";

function topKFrequent(nums: number[], k: number): number[] {
  const counter = generateCounter<number>(nums);
  const pq = new PriorityQueue<number>();

  for (const [key, value] of counter) {
    pq.push(key, value);
  }

  const result = [];

  while (pq.length && k > 0) {
    const item = pq.pop() ?? null;
    if (item) {
      result.push(item.value);
    }
    k -= 1;
  }

  return result;
}

export default topKFrequent;
