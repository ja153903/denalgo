function climbStairs(n: number): number {
  let a = 1;
  let b = 1;

  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }

  return a;
}

export default climbStairs;
