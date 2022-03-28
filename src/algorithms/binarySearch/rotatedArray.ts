function findMinimumIndexInRotatedSortedArray<T>(items: T[]): number {
  let left = 0;
  let right = items.length - 1;

  while (left < right) {
    const mid = Math.floor(left + (right - left) >> 1);

    if (items[mid] >= items[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

export { findMinimumIndexInRotatedSortedArray };
