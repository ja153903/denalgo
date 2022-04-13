const OPS = new Set(["+", "-", "/", "*"]);

function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  for (const token of tokens) {
    if (OPS.has(token)) {
      const b = stack.pop() ?? null;
      const a = stack.pop() ?? null;

      if (a !== null && b !== null) {
        const result = _eval(token, a, b);
        stack.push(result);
      }
    } else {
      stack.push(parseInt(token));
    }
  }

  return stack[0];
}

function _eval(op: string, a: number, b: number): number {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    default:
      return Math.trunc(a / b);
  }
}

export default evalRPN;
