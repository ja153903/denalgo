function maxSubArray(nums: number[]): number {
  let maxSoFar = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxSoFar = Math.max(maxSoFar + nums[i], nums[i]);
    max = Math.max(max, maxSoFar);
  }

  return max;
}

export default maxSubArray;
