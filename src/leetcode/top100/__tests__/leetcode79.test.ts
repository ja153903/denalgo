import { assertEquals } from "../../../testingUtils/assertions.ts";
import exist from "../leetcode79.ts";

Deno.test("79. Word Search", () => {
  let board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], [
    "A",
    "D",
    "E",
    "E",
  ]];
  let word = "ABCCED";

  assertEquals(exist(board, word), true);

  board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
  word = "SEE";

  assertEquals(exist(board, word), true);

  board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
  word = "ABCB";

  assertEquals(exist(board, word), false);
});
