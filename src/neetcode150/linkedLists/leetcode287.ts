function findDuplicate(nums: number[]): number {
  if (nums.length < 1) {
    return -1;
  }

  let slow = nums[0];
  let fast = nums[nums[0]];

  // we do a slow and fast pointer approach here.
  // and we break when fast and slow are the same
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  fast = 0;

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}

export default findDuplicate;
