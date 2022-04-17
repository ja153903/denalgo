import { assertEquals } from "../../../../../testingUtils/assertions.ts";
import solve from "../leetcode6070.ts";

Deno.test("6070", () => {
  assertEquals(solve("01234567890", 2), "27");
});
