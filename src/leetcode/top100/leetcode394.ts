function decodeString(s: string): string {
  const stack: Array<string | number> = [];

  let currentNum = 0;
  let currentStr = "";

  for (let i = 0; i < s.length; i++) {
    if (Number.isInteger(parseInt(s[i]))) {
      currentNum = currentNum * 10 + parseInt(s[i]);
    } else if (s[i] !== "[" && s[i] !== "]") {
      currentStr += s[i];
    } else if (s[i] === "[") {
      stack.push(currentNum);
      stack.push(currentStr);

      currentNum = 0;
      currentStr = "";
    } else if (s[i] === "]") {
      const str = stack.pop();
      const count = stack.pop();

      if (str !== undefined && count && count > 0) {
        let currentStrMult = "";
        for (let i = 0; i < count; i++) {
          currentStrMult += currentStr;
        }

        currentStr = str + currentStrMult;
      }
    }
  }

  return currentStr;
}

export default decodeString;
