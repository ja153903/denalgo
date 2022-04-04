function dailyTemperatures(temperatures: number[]): number[] {
  const result: number[] = new Array<number>(temperatures.length).fill(0);
  const stack: number[] = [];

  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (
      stack.length &&
      temperatures[stack[stack.length - 1]] <= temperatures[i]
    ) {
      stack.pop();
    }

    result[i] = !stack.length ? 0 : stack[stack.length - 1] - i;
    stack.push(i);
  }

  return result;
}

export default dailyTemperatures;
