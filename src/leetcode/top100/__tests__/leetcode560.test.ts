import { assertEquals } from "../../../testingUtils/assertions.ts";
import subarraySum from "../leetcode560.ts";

Deno.test("560. Subarray Sum Equals K", () => {
  let nums = [1, 1, 1];
  let k = 2;

  assertEquals(subarraySum(nums, k), 2);

  nums = [1, 2, 3];
  k = 3;

  assertEquals(subarraySum(nums, k), 2);
});
