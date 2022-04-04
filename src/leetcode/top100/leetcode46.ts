function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  _backtrack(nums, result, []);

  return result;
}

function _backtrack(nums: number[], result: number[][], current: number[]) {
  if (current.length === nums.length) {
    result.push([...current]);
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (current.includes(nums[i])) {
        continue;
      }

      current.push(nums[i]);
      _backtrack(nums, result, current);
      current.pop();
    }
  }
}

export default permute;
