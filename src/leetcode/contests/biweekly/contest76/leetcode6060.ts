//Given an integer array nums of size n, return the number with the value closest to 0 in nums.
// If there are multiple answers, return the number with the largest value.
function findClosestNumber(nums: number[]): number {
  // for each number in this array, we can keep track of its closeness to 0
  // we can also keep track of which value is closest
  const closeness = nums.map((num) => ({ num, diff: Math.abs(num - 0) }));

  let closestValue: number = closeness[0].num;
  let closestDiff: number = closeness[0].diff;

  for (let i = 1; i < closeness.length; i++) {
    const { num, diff } = closeness[i];

    if (diff === closestDiff) {
      if (num > closestValue) {
        closestValue = num;
      }
    } else if (diff < closestDiff) {
      closestValue = num;
      closestDiff = diff;
    }
  }

  return closestValue;
}

export default findClosestNumber;
