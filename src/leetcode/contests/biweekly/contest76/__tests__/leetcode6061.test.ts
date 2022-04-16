import { assert } from "../../../../../testingUtils/assertions.ts";
import solve from "../leetcode6061.ts";

Deno.test("Buying pens and pencils", () => {
  let total = 20, cost1 = 10, cost2 = 5;

  assert(solve(total, cost1, cost2) === 9);

  total = 5, cost1 = 10, cost2 = 10;
  assert(solve(total, cost1, cost2) === 1);
});
