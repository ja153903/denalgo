const PHONE_NUM_TO_ALPHA: Map<string, string> = new Map([
  ["1", ""],
  ["2", "abc"],
  ["3", "def"],
  ["4", "ghi"],
  ["5", "jkl"],
  ["6", "mno"],
  ["7", "pqrs"],
  ["8", "tuv"],
  ["9", "wxyz"],
]);

function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return [];
  }

  const queue: string[] = [];

  queue.push("");

  for (const num of digits) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const front = queue.shift() ?? "";
      const repr = PHONE_NUM_TO_ALPHA.get(num) ?? "";
      for (const char of repr) {
        queue.push(front + char);
      }
    }
  }

  return queue;
}

export default letterCombinations;
