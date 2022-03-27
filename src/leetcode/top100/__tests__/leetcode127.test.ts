import { assertEquals } from "../../../testingUtils/assertions.ts";
import ladderLength from "../leetcode127.ts";

Deno.test("127. Word Ladder", () => {
  let beginWord = "hit";
  let endWord = "cog";
  let wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

  assertEquals(ladderLength(beginWord, endWord, wordList), 5);

  beginWord = "hit";
  endWord = "cog";
  wordList = ["hot", "dot", "dog", "lot", "log"];

  assertEquals(ladderLength(beginWord, endWord, wordList), 0);
});
