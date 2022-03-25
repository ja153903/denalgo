import { assertEquals } from "../../../testingUtils/assertions.ts";
import numRescueBoats from "../leetcode881.ts";

Deno.test("881. Boats to Save People", () => {
  assertEquals(numRescueBoats([1, 2], 3), 1);
  assertEquals(numRescueBoats([3, 2, 2, 1], 3), 3);
  assertEquals(numRescueBoats([3, 5, 3, 4], 5), 4);
  assertEquals(numRescueBoats([5, 1, 4, 2], 6), 2);
  assertEquals(numRescueBoats([2, 2], 6), 1);
});
