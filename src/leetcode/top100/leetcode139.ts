function wordBreak(s: string, wordDict: string[]): boolean {
  const words = new Set<string>(wordDict);
  const dp = new Array<boolean>(s.length + 1).fill(false);

  dp[0] = true;

  for (let i = 1; i < s.length + 1; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && words.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[dp.length - 1];
}

export default wordBreak;
