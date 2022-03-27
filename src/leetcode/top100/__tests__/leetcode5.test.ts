import { assertEquals } from "../../../testingUtils/assertions.ts";
import longestPalindrome from "../leetcode5.ts";

Deno.test("5. Longest Palindromic Substring", () => {
  let s = "babad";
  let result = longestPalindrome(s);

  let expected = new Set(["bab", "aba"]);

  assertEquals(expected.has(result), true);

  s = "cbbd";
  result = longestPalindrome(s);

  expected = new Set(["bb"]);

  assertEquals(expected.has(result), true);
});
