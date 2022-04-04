function subsets(nums: number[]): number[][] {
  const result: number[][] = [];

  _backtrack(nums, 0, result, []);

  return result;
}

function _backtrack(nums: number[], start: number, result: number[][], current: number[]) {
  result.push([...current]);

  for (let i = start; i < nums.length; i++) {
    current.push(nums[i]);
    _backtrack(nums, i + 1, result, current);
    current.pop();
  }
}

export default subsets;
