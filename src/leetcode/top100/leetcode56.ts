function merge(intervals: number[][]): number[][] {
  const result: number[][] = [];

  intervals.sort((a, b) => a[0] - b[0]);

  result.push(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    const top = result[result.length - 1];
    const current = intervals[i];

    // Ex: top = [1, 3], current = [2, 6]
    // we can see that we can merge these intervals into [1, 6]
    if (top[1] >= current[0]) {
      top[1] = Math.max(top[1], current[1]);
    } else {
      result.push(intervals[i]);
    }
  }

  return result;
}

export default merge;
