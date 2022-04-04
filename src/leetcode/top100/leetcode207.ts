// This is simple Khan algorithm problem
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph: Map<number, Set<number>> = new Map();
  const indegree: number[] = new Array<number>(numCourses).fill(0);

  for (const [u, v] of prerequisites) {
    if (graph.has(v)) {
      graph.get(v)?.add(u);
    } else {
      graph.set(v, new Set([u]));
    }

    indegree[u] += 1;
  }

  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length) {
    const front: number | null = queue.pop() ?? null;
    // check explicitly for null since 0 is falsy
    if (front === null) {
      return false;
    }

    const next = graph.get(front) ?? [];

    for (const child of next) {
      const count = indegree[child];
      if (count === 0) {
        return false;
      }

      indegree[child] -= 1;
      if (indegree[child] === 0) {
        queue.push(child);
      }
    }
  }

  return indegree.filter((value) => value === 0).length === numCourses;
}
export default canFinish;
