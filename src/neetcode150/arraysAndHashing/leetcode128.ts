// Two ways to get this done
// We can use a set and keep track of values that do exist in the list
function longestConsecutive(nums: number[]): number {
  if (!nums.length) {
    return 0;
  }

  const seen = new Set<number>(nums);
  let max = 1;

  for (const num of nums) {
    // This condition makes sure that we're really only checking values
    // that are the smallest values in any given consecutive sequence
    if (!seen.has(num - 1)) {
      let currentNum = num;
      let currentMax = 0;

      while (seen.has(currentNum)) {
        currentMax++;
        currentNum++;
      }

      max = Math.max(max, currentMax);
    }
  }

  return max;
}

export default longestConsecutive;
