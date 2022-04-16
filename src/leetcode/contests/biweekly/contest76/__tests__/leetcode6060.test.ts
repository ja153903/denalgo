import { assert } from "../../../../../testingUtils/assertions.ts";
import findClosestNumber from "../leetcode6060.ts";

Deno.test("Find Closest Number to Zero", () => {
  let nums = [-4, -2, 1, 4, 8];
  assert(findClosestNumber(nums) === 1);

  nums = [2, -1, 1];
  assert(findClosestNumber(nums) === 1);

  nums = [1];
  assert(findClosestNumber(nums) === 1);
});
