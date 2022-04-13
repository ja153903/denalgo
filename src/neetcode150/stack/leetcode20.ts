function isValid(s: string): boolean {
  const stack: string[] = [];

  for (const ch of s) {
    if (ch === "(") {
      stack.push(")");
    } else if (ch === "{") {
      stack.push("}");
    } else if (ch === "[") {
      stack.push("]");
    } else if (!stack.length || stack.pop() !== ch) {
      return false;
    }
  }

  return !stack.length;
}

export default isValid;
