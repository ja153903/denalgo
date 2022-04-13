function searchMatrix(matrix: number[][], target: number): boolean {
  // do binary search here, for each row, we check the first and last element
  // once we've found the right row, we do another binary search
  const cols = matrix[0].length;
  let rleft = 0;
  let rright = matrix.length - 1;

  while (rleft <= rright) {
    const mid = Math.floor(rleft + (rright - rleft) / 2);
    const start = matrix[mid][0];
    const end = matrix[mid][cols - 1];

    if (target >= start && target <= end) {
      if (target === start || target === end) {
        return true;
      }

      let left = 0;
      let right = cols - 1;

      while (left <= right) {
        const cmid = Math.floor(left + (right - left) / 2);
        if (matrix[mid][cmid] === target) {
          return true;
        } else if (matrix[mid][cmid] < target) {
          left = cmid + 1;
        } else {
          right = cmid - 1;
        }
      }

      return false;
    } else if (target < start) {
      // if the target is smaller than the current row's start, then we need to limit right pointer
      rright = mid - 1;
    } else {
      rleft = mid + 1;
    }
  }

  return false;
}

export default searchMatrix;