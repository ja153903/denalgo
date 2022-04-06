import { generateCounter } from "../../algorithms/utility/counter.ts";

function isAnagram(s: string, t: string): boolean {
  const counter = generateCounter<string>(s.split(''));
  
  for (const ch of t) {
    if (!counter.has(ch)) {
      return false;
    }
    
    const count = counter.get(ch) ?? 0;

    if (count - 1 < 0) {
      return false;
    }
    
    counter.set(ch, count - 1);
  }
  
  return [...counter.values()].reduce((a, b) => a + b) === 0;
}

export default isAnagram;