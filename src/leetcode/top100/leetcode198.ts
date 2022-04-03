function rob(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }

  let a = nums[0];
  let b = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    [a, b] = [b, Math.max(nums[i] + a, b)];
  }

  return b;
}

export default rob;
