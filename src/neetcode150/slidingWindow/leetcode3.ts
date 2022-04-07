function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  let start = 0;
  const seen: Map<string, number> = new Map();

  for (let i = 0; i < s.length; i++) {
    if (seen.has(s[i])) {
      const lastSeenIndex = seen.get(s[i]) ?? null;
      if (lastSeenIndex !== null) {
        start = Math.max(start, lastSeenIndex + 1);
      }
    }

    max = Math.max(max, i - start + 1);
    seen.set(s[i], i);
  }

  return max;
}

export default lengthOfLongestSubstring;
