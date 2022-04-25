import { assertEquals } from "../../../../../testingUtils/assertions.ts";
import solve from "../leetcode2249.ts";

Deno.test("Count Lattice Points", () => {
  let circles = [[2, 2, 2], [3, 4, 1]];
  assertEquals(solve(circles), 16);

  circles = [
    [8, 9, 6],
    [9, 8, 4],
    [4, 1, 1],
    [8, 5, 1],
    [7, 1, 1],
    [6, 7, 5],
    [7, 1, 1],
    [7, 1, 1],
    [5, 5, 3],
  ];
  assertEquals(solve(circles), 141);
});
