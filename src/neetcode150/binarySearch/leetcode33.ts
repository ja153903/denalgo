function search(nums: number[], target: number): number {
  // find the minimum value in the array to know the pivot
  // use the above information to do a normal binary search by modifying

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] > nums[right]) {
      // if the number in the middle is greater than or equal to the number
      // on the right, then this means the min lives to the right of mid
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  const pivot = left;

  left = 0;
  right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    const realMid = (mid + pivot) % nums.length;

    if (nums[realMid] === target) {
      return realMid;
    } else if (nums[realMid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

export default search