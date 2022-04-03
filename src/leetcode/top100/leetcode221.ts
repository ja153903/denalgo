function maximalSquare(matrix: string[][]): number {
  let max = 0;
  const dp = new Array<Array<number>>();

  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let i = 0; i <= rows; i++) {
    dp[i] = new Array<number>();
    for (let j = 0; j <= cols; j++) {
      dp[i].push(0);
    }
  }

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      if (matrix[i - 1][j - 1] === "1") {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        max = Math.max(max, dp[i][j]);
      }
    }
  }

  return max * max;
}

export default maximalSquare;
