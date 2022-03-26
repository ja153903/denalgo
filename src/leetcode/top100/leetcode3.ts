function lengthOfLongestSubstring(s: string): number {
  const mp = new Map<string, number>();

  let start = 0;
  let maxLen = 0;

  for (let end = 0; end < s.length; end++) {
    if (mp.has(s[end])) {
      start = Math.max(start, (mp.get(s[end]) ?? -1) + 1);
    }

    maxLen = Math.max(maxLen, end - start + 1);
    mp.set(s[end], end);
  }

  return maxLen;
}

export default lengthOfLongestSubstring;
