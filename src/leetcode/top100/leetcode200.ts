function numIslands(grid: string[][]): number {
  let result = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        result += 1;
        _dfs(grid, i, j);
      }
    }
  }

  return result;
}

function _dfs(grid: string[][], i: number, j: number) {
  if (
    i < 0 || j < 0 || i >= grid.length || j >= grid[0].length ||
    grid[i][j] !== "1"
  ) {
    return;
  }

  grid[i][j] = "";

  _dfs(grid, i + 1, j);
  _dfs(grid, i - 1, j);
  _dfs(grid, i, j + 1);
  _dfs(grid, i, j - 1);
}

export default numIslands;
