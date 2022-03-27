// Solution to this problem looks like a typical DFS but at this point we should temporarily mask the values we're looking at
// then after our search we have to restore the value back
function exist(board: string[][], word: string): boolean {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        if (_dfs(board, word, i, j, 0)) {
          return true;
        }
      }
    }
  }

  return false;
}

function _dfs(
  board: string[][],
  word: string,
  i: number,
  j: number,
  current: number,
): boolean {
  if (
    i < 0 || j < 0 || i >= board.length || j >= board[i].length ||
    board[i][j] !== word[current]
  ) {
    return false;
  }

  if (current === word.length - 1) {
    return board[i][j] === word[current];
  }

  const temp = board[i][j];
  board[i][j] = "";

  const result = (
    _dfs(board, word, i + 1, j, current + 1) ||
    _dfs(board, word, i - 1, j, current + 1) ||
    _dfs(board, word, i, j + 1, current + 1) ||
    _dfs(board, word, i, j - 1, current + 1)
  );

  board[i][j] = temp;

  return result;
}

export default exist;
