function moveZeroes(nums: number[]): void {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j += 1;
    }
  }

  for (let i = j; i < nums.length; i++) {
    nums[i] = 0;
  }
}

export default moveZeroes;
