function minWindow(s: string, t: string): string {
  const counter = new Map<string, number>();
  for (const ch of t) {
    counter.set(ch, (counter.get(ch) ?? 0) + 1);
  }

  let resultStart = 0;
  let resultLen = Number.POSITIVE_INFINITY;
  let target = t.length;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    if (counter.has(s[end])) {
      counter.set(s[end], (counter.get(s[end]) ?? 0) - 1);
      if ((counter.get(s[end]) ?? -1) >= 0) {
        target--;
      }

      while (target === 0) {
        // if the current window length is less than the result length
        // and the target is 0, then we should update our result information
        if (end - start + 1 < resultLen) {
          resultStart = start;
          resultLen = end - start + 1;
        }

        if (counter.has(s[start])) {
          counter.set(s[start], (counter.get(s[start]) ?? 0) + 1);
          if ((counter.get(s[start]) ?? 0) > 0) {
            target++;
          }
        }

        start++;
      }
    }
  }

  if (resultLen > s.length) {
    return "";
  }

  return s.substring(resultStart, resultStart + resultLen);
}

export default minWindow;
