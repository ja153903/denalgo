function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const stack: number[] = [];
  const result = new Array<number>(temperatures.length).fill(0);

  stack.push(n - 1);

  for (let i = n - 2; i >= 0; i--) {
    const current = temperatures[i];

    while (stack.length && current >= temperatures[stack[stack.length - 1]]) {
      stack.pop();
    }

    result[i] = stack.length ? stack[stack.length - 1] - i : 0;

    stack.push(i);
  }

  return result;
}

export default dailyTemperatures;
