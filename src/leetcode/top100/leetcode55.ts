function canJump(nums: number[]): boolean {
  let i = 0;
  let reach = 0;

  while (i < nums.length && i <= reach) {
    reach = Math.max(nums[i] + i, reach);
    i++;
  }

  return i === nums.length;
}

export default canJump;
