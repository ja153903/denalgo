function intersection(nums: number[][]): number[] {
  return nums.reduce((first, second) => {
    const fset = new Set(first);
    const sset = new Set(second);

    return [...fset].filter(num => sset.has(num));
  }).sort((a, b) => a - b);
}

export default intersection;
