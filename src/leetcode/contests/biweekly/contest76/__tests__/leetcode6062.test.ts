import { assertEquals } from "../../../../../testingUtils/assertions.ts";
import Solution from "../leetcode6062.ts";

Deno.test("ATM", () => {
  const atm = new Solution();

  atm.deposit([0, 0, 1, 2, 1]);

  assertEquals(atm.withdraw(600), [0, 0, 1, 0, 1]);

  atm.deposit([0, 1, 0, 1, 1]);

  assertEquals(atm.withdraw(600), [-1]);

  assertEquals(atm.withdraw(550), [0, 1, 0, 0, 1]);
});
