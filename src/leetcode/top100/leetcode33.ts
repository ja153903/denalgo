function search(nums: number[], target: number): number {
  if (nums.length === 0) {
    return -1;
  }

  // find the minimum via binary search
  // use minimum value's index as the pivot to adjust binary search
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor(left + ((right - left) / 2));

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  const pivot = left;
  left = 0;
  right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + ((right - left) / 2));
    const realmid = (mid + pivot) % nums.length;

    if (nums[realmid] === target) {
      return realmid;
    } else if (nums[realmid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

export default search;
