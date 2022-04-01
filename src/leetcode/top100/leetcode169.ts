import { generateCounter } from "../../algorithms/utility/counter.ts";

function majorityElement(nums: number[]): number {
  const threshold = Math.ceil(nums.length / 2);
  const counter = generateCounter<number>(nums);

  for (const [key, value] of counter) {
    if (value >= threshold) {
      return key;
    }
  }

  return -1;
}

export default majorityElement;
