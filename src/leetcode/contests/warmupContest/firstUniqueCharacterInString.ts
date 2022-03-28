import { generateCounter } from "../../../algorithms/utility/counter.ts";

function firstUniqChar(s: string): number {
  const counter = generateCounter<string>(s.split(""));

  for (let i = 0; i < s.length; i++) {
    if ((counter.get(s[i]) ?? -1) === 1) {
      return i;
    }
  }

  return -1;
}

export default firstUniqChar;
