function checkInclusion(s1: string, s2: string): boolean {
  // this is a sliding window problem
  const counter = new Map<string, number>();

  for (const ch of s1) {
    counter.set(ch, (counter.get(ch) ?? 0) + 1);
  }

  for (let end = 0; end < s2.length; end++) {
    // if we have the value, then we decrement it
    if (counter.has(s2[end])) {
      counter.set(s2[end], (counter.get(s2[end]) ?? 1) - 1);
    }

    const currentWindowLength = end - s1.length;

    if (currentWindowLength >= 0 && counter.has(s2[currentWindowLength])) {
      counter.set(
        s2[currentWindowLength],
        (counter.get(s2[currentWindowLength]) ?? 0) + 1,
      );
    }

    if (_allZero(counter)) {
      return true;
    }
  }

  return false;
}

function _allZero(map: Map<string, number>): boolean {
  for (const value of map.values()) {
    if (value !== 0) {
      return false;
    }
  }

  return true;
}

export default checkInclusion;
