import { assertEquals } from "../../../testingUtils/assertions.ts";
import lengthOfLongestSubstring from "../leetcode3.ts";

Deno.test("3. Longest Substring Without Repeating Characters", () => {
  let s = "abcabcbb";

  assertEquals(lengthOfLongestSubstring(s), 3);

  s = "bbbbb";

  assertEquals(lengthOfLongestSubstring(s), 1);

  s = "pwwkew";

  assertEquals(lengthOfLongestSubstring(s), 3);
});
