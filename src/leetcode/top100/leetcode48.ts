function rotate(matrix: number[][]) {
  // when doing clockwise rotation, we reverse rows and then transpose
  // when doing counter-clockwise rotation, we transpose and then reverse rows
  for (let i = 0, j = matrix.length - 1; i < j; i++, j--) {
    [matrix[i], matrix[j]] = [matrix[j], matrix[i]];
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j <= i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
}

export default rotate;
