import { assertEquals } from "../../../testingUtils/assertions.ts";
import findKthLargest from "../leetcode215.ts";

Deno.test("215. Kth Largest Element in an Array", () => {
  let nums = [3, 2, 1, 5, 6, 4];
  let k = 2;

  assertEquals(findKthLargest(nums, k), 5);

  nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
  k = 4;

  assertEquals(findKthLargest(nums, k), 4);
});
