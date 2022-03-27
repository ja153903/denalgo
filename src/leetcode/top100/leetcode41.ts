// TODO: Figure out how this shit actually works
function firstMissingPositive(nums: number[]): number {
  const n = nums.length;

  // if 1 is not here, then just return 1
  if (!nums.includes(1)) {
    return 1;
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] <= 0 || nums[i] > n) {
      nums[i] = 1;
    }
  }

  for (let i = 0; i < n; i++) {
    const pos = Math.abs(nums[i]);
    if (pos === n) {
      nums[0] = -Math.abs(nums[0]);
    } else {
      nums[pos] = -Math.abs(nums[pos]);
    }
  }

  for (let i = 1; i < n; i++) {
    if (nums[i] > 0) {
      return i;
    }
  }

  if (nums[0] > 0) {
    return n;
  }

  return n + 1;
}

function _bruteForce(nums: number[]): number {
  // This is O(n log n)
  nums.sort((a, b) => a - b);

  for (let i = nums[0]; i <= nums[nums.length - 1]; i++) {
    if (i > 0) {
      return i;
    }
  }

  return -1;
}

export default firstMissingPositive;
