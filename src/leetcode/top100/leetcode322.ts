// typical dp problem where we let dp[i] denote the fewest number of coins to make up amount i
function coinChange(coins: number[], amount: number): number {
  const dp = new Array<number>(amount + 1).fill(Number.POSITIVE_INFINITY);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
      }
    }
  }

  return dp[amount] === Number.POSITIVE_INFINITY ? -1 : dp[amount];
}

export default coinChange;
