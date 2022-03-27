function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  _backtrack(n, result, "", n, n);

  return result;
}

function _backtrack(
  n: number,
  result: string[],
  current: string,
  open: number,
  close: number,
) {
  if (current.length === 2 * n) {
    result.push(current);
  } else {
    if (open > 0 && open <= close) {
      _backtrack(n, result, current + "(", open - 1, close);
    }

    if (close > 0 && close <= n) {
      _backtrack(n, result, current + ")", open, close - 1);
    }
  }
}

export default generateParenthesis;
