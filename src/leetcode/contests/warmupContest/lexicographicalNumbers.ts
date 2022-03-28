/**
 * Given an integer n, return all the numbers in the range [1, n] sorted in lexicographical order.
 * You must write an algorithm that runs in O(n) time and uses O(1) extra space.
 */
function lexicalOrder(n: number): number[] {
  const result: number[] = [];

  for (let i = 1; i < 10; i++) {
    _dfs(result, i, n);
  }

  return result;
}

function _dfs(result: number[], current: number, n: number) {
  if (current > n) {
    return;
  }

  result.push(current);

  for (let i = 0; i < 10; i++) {
    _dfs(result, current * 10 + i, n);
  }
}

export default lexicalOrder;
