function isValid(s: string): boolean {
  const stack = [];

  for (const ch of s) {
    switch (ch) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default: {
        if (!stack.length) {
          return false;
        }

        const top = stack.pop();
        if (top !== ch) {
          return false;
        }
      }
    }
  }

  return !stack.length;
}

export default isValid;
