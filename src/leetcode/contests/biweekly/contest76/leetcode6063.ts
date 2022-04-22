function maximumScore(scores: number[], edges: number[][]): number {
  // TODO: Upsolve this later. I think this problem requires us to use
  // DFS from any node and figure out what the max path should be
  // we should also keep track of the length of the edge here
  let maxResult = -1;

  function dfs(
    graph: Map<number, Set<number>>,
    visited: Set<number>,
    current: number,
    scores: number,
    length: number,
  ) {
    if (visited.has(current)) {
      if (length >= 4) {
        maxResult = Math.max(maxResult, scores);
      }
      return;
    }

    visited.add(current);

    for (const child of graph.get(current) ?? []) {
      dfs(graph, visited, child, scores + child, length + 1);
    }
  }

  // TODO: build the graph

  return maxResult;
}

export default maximumScore;
