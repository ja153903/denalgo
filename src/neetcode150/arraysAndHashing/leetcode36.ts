function isValidSudoku(board: string[][]): boolean {
  const seen = new Set<string>();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        // we can encode the items in the board
        const inRow = `${board[i][j]} in row ${i}`;
        const inCol = `${board[i][j]} in col ${j}`;
        const inBlock = `${board[i][j]} in block ${Math.floor(i / 3)} - ${
          Math.floor(j / 3)
        }`;

        // if this shit already exists anywhere, then we know its not valid
        if (seen.has(inRow) || seen.has(inCol) || seen.has(inBlock)) {
          return false;
        }

        seen.add(inRow);
        seen.add(inCol);
        seen.add(inBlock);
      }
    }
  }

  return true;
}

export default isValidSudoku;
