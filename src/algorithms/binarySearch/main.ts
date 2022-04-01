// This function returns the index
function binarySearch<T>(items: T[], target: T): number {
  let left = 0;
  let right = items.length - 1;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);

    if (items[mid] === target) {
      return mid;
    } else if (items[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

export { binarySearch };
