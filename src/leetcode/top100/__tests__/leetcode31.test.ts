import { assertEquals } from "../../../testingUtils/assertions.ts";
import nextPermutation from "../leetcode31.ts";

Deno.test("31. Next Permutation", () => {
  let nums = [1, 2, 3];

  nextPermutation(nums);

  assertEquals(nums, [1, 3, 2]);

  nums = [3, 2, 1];

  nextPermutation(nums);

  assertEquals(nums, [1, 2, 3]);

  nums = [1, 5, 1];

  nextPermutation(nums);

  assertEquals(nums, [5, 1, 1]);
});
