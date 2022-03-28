import { generateCounter } from "../../../algorithms/utility/counter.ts";

function firstUniqChar(s: string): number {
  const counter = generateCounter<string>(s.split(""));

  for (let i = 0; i < s.length; i++) {
    const count = counter.get(s[i]) ?? 0;
    if (count === 1) {
      return i;
    }
  }

  return -1;
}

export default firstUniqChar;
