function productExceptSelf(nums: number[]): number[] {
  const result = new Array<number>(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  let right = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }

  return result;
}

export default productExceptSelf;
