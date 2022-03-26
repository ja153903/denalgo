/**
 * What is the idea with this solution?
 * With this solution we keep track of two pointers: maxLeft and maxRight
 * The reason we keep these pointers is because we can only trap water if
 * there exists a lower height between two heights higher than it.
 * We have to continually iterate over all heights fixing both maxLeft and
 * maxRight values keep track of the different pockets throughout the array
 * that need us to collect water.
 */
function trap(height: number[]): number {
  let left = 0;
  let right = height.length - 1;

  let maxLeft = height[left];
  let maxRight = height[right];

  let result = 0;

  while (left < right) {
    if (height[left] <= height[right]) {
      if (height[left] > maxLeft) {
        maxLeft = height[left];
      } else {
        result += maxLeft - height[left];
        left += 1;
      }
    } else {
      if (height[right] > maxRight) {
        maxRight = height[right];
      } else {
        result += maxRight - height[right];
        right -= 1;
      }
    }
  }

  return result;
}

export default trap;
