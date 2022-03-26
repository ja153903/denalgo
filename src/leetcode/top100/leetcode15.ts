function threeSum(nums: number[]): number[][] {
  const result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let j = i + 1;
      let k = nums.length - 1;

      while (j < k) {
        const target = nums[j] + nums[k];
        if (target === -nums[i]) {
          result.push([nums[i], nums[j], nums[k]]);

          while (j < k && nums[j] === nums[j + 1]) {
            j += 1;
          }

          while (j < k && nums[k] === nums[k - 1]) {
            k -= 1;
          }

          j += 1;
          k -= 1;
        } else if (target < -nums[i]) {
          j += 1;
        } else {
          k -= 1;
        }
      }
    }
  }

  return result;
}

export default threeSum;
