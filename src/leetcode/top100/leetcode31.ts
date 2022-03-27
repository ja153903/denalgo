function nextPermutation(nums: number[]): void {
  const pivot = longestNonIncreasingSubsequence(nums) - 1;
  if (pivot !== -1) {
    const successor = findRightmostSuccessor(nums, pivot);

    [nums[pivot], nums[successor]] = [nums[successor], nums[pivot]];

    for (let i = pivot + 1, j = nums.length - 1; i < j; i++, j--) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  } else {
    nums.reverse();
  }
}

function longestNonIncreasingSubsequence(nums: number[]): number {
  const n = nums.length;

  let right = n - 1;

  while (right > 0) {
    if (nums[right] > nums[right - 1]) {
      return right;
    }

    right -= 1;
  }

  return 0;
}

function findRightmostSuccessor(nums: number[], pivot: number): number {
  const n = nums.length;

  let right = n - 1;

  while (right > pivot) {
    if (nums[right] > nums[pivot]) {
      return right;
    }

    right -= 1;
  }

  return pivot + 1;
}

export default nextPermutation;
