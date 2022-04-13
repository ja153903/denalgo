function generateParenthesis(n: number): string[] {
  // this is a backtracking problem
  const result: string[] = [];

  _backtrack(result, n, "", 0, 0);

  return result;
}

function _backtrack(
  result: string[],
  n: number,
  stack: string,
  open: number,
  close: number,
) {
  if (stack.length === 2 * n) {
    result.push(stack);
    return;
  }

  if (open < n) {
    _backtrack(result, n, stack + "(", open + 1, close);
  }

  if (close < open) {
    _backtrack(result, n, stack + ")", open, close + 1);
  }
}

export default generateParenthesis;
