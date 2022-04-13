import { assertEquals } from "../../../testingUtils/assertions.ts";
import solve from "../leetcode239.ts";

Deno.test("Sliding Window Maximum - Case 1", () => {
  const nums = [1, 3, -1, -3, 5, 3, 6, 7];
  const k = 3;

  assertEquals(solve(nums, k), [3, 3, 5, 5, 6, 7]);
});

Deno.test("Sliding Window Maximum - Case 2", () => {
  const nums = [1, -1];
  const k = 1;

  assertEquals(solve(nums, k), [1, -1]);
});

Deno.test("Sliding Window Maximum - Case 3", () => {
  const nums = [7, 2, 4];
  const k = 2;

  assertEquals(solve(nums, k), [7, 4]);
});

Deno.test("Sliding Window Maximum - Case 4", () => {
  const nums = [1, 3, 1, 2, 0, 5];
  const k = 3;

  assertEquals(solve(nums, k), [3, 3, 2, 5]);
});
