function twoSum(numbers: number[], target: number): number[] {
  let i = 0;
  let j = numbers.length - 1;

  while (i < j) {
    const current = numbers[i] + numbers[j];

    if (current === target) {
      return [i + 1, j + 1];
    } else if (current < target) {
      i++;
    } else {
      j--;
    }
  }

  return [];
}

export default twoSum;
