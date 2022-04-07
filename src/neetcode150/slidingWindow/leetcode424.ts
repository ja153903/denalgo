function characterReplacement(s: string, k: number): number {
  // starting from 0, how far can we extend with k modifications?
  const n = s.length;
  const counter = new Map<string, number>();
  let maxCount = 0;
  let maxLength = 0;
  let start = 0;

  for (let end = 0; end < n; end++) {
    const count = counter.get(s[end]) ?? 0;
    counter.set(s[end], count + 1);
    maxCount = Math.max(maxCount, count + 1);

    // current length of window - count of most frequently appearing character
    while (end - start + 1 - maxCount > k) {
      const currentCount = counter.get(s[start]) ?? null;
      if (currentCount !== null) {
        counter.set(s[start], currentCount - 1);
        start++;
      }
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

export default characterReplacement;
