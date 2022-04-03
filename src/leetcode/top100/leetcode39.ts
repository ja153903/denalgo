function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];

  _backtrack(candidates, target, result, [], 0);

  return result;
}

function _backtrack(candidates: number[], target: number, result: number[][], current: number[], start: number) {
  if (target < 0) {
    return;
  }

  if (target === 0) {
    result.push([...current]);
  } else {
    for (let i = start; i < candidates.length; i++) {
      if (target - candidates[i] >= 0) {
        _backtrack(candidates, target - candidates[i], result, [...current, candidates[i]], i);
      }
    }
  }
}

export default combinationSum;
