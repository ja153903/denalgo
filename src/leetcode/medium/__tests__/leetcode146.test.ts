import { assertEquals } from "../../../testingUtils/assertions.ts";
import LRUCache from "../leetcode146.ts";

Deno.test("146. LRU Cache", () => {
  const lruCache = new LRUCache(2);

  lruCache.put(1, 1);
  lruCache.put(2, 2);

  assertEquals(lruCache.get(1), 1);
});
