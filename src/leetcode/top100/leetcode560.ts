// Given an array of integers nums and an integer k,
// return the total number of subarrays whose sum equals to k.
function subarraySum(nums: number[], k: number): number {
  const mp = new Map<number, number>();
  mp.set(0, 1);

  let result = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    const target = sum - k;
    result += mp.get(target) ?? 0;

    mp.set(sum, (mp.get(sum) ?? 0) + 1);
  }

  return result;
}

export default subarraySum;
