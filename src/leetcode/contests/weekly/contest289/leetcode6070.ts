function digitSum(s: string, k: number): string {
  if (k >= s.length) {
    return s;
  }
  // split each string into groups of k
  // convert each character to an integer and find the sum of each group and then
  // converting them back to a string
  // once the length of s is less than or equal to k, then we return the string
  while (true) {
    const currModified: string[] = [];
    for (let i = 0; i < s.length; i += k) {
      const curr = s
        .substring(i, i + k)
        .split("")
        .map((ch) => parseInt(ch))
        .reduce((a, b) => a + b)
        .toString();

      for (const ch of curr) {
        currModified.push(ch);
      }
    }

    if (currModified.length <= k) {
      return currModified.join("");
    }

    s = currModified.join("");
  }
}

export default digitSum;
