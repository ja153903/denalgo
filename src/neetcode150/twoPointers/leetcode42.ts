function trap(height: number[]): number {
  let i = 0;
  let j = height.length - 1;
  let result = 0;

  let maxLeft = height[i];
  let maxRight = height[j];

  while (i < j) {
    if (height[i] < height[j]) {
      if (height[i] > maxLeft) {
        maxLeft = height[i];
      } else {
        result += maxLeft - height[i];
      }
      i++;
    } else {
      if (height[j] > maxRight) {
        maxRight = height[j];
      } else {
        result += maxRight - height[j];
      }
      j--;
    }
  }

  return result;
}

export default trap;
