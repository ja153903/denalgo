function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;

  let area = 0;

  while (left < right) {
    const current = Math.min(height[left], height[right]) * (right - left);
    area = Math.max(area, current);

    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return area;
}

export default maxArea;
