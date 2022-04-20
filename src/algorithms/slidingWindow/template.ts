// Sliding Window Algorithm Template
// int left = 0, right = 0;

// while (right < s.size()) {
//     window.add(s[right]);
//     right++;

//     while (valid) {
//         window.remove(s[left]);
//         left++;
//     }
// }

function slidingWindowTemplate(s: string, t: string) {
  const window = new Map<string, number>();
  const needs = new Map<string, number>();

  for (const ch of t) {
    needs.set(ch, (needs.get(ch) ?? 0) + 1);
  }

  let start = 0;
  let end = 0;

  let minString = "";
  let minLength = Number.POSITIVE_INFINITY;
  let match = 0;

  while (end < s.length) {
    const currentEnd = s[end];
    if (needs.has(currentEnd)) {
      window.set(currentEnd, (window.get(currentEnd) ?? 0) + 1);
      if (window.get(currentEnd) === needs.get(currentEnd)) {
        match++;
      }
    }

    end++;

    while (match === needs.size) {
      if (end - start < minLength) {
        minLength = end - start;
        minString = s.substring(start, start + minLength);
      }

      const currentStart = s[start];
      if (needs.has(currentStart)) {
        window.set(currentStart, (window.get(currentStart) ?? 1) - 1);
        if (window.get(currentStart) === needs.get(currentStart)) {
          match--;
        }
      }
      start++;
    }
  }

  return minString;
}

export default slidingWindowTemplate;
