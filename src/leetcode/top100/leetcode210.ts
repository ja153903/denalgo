function findOrder(numCourses: number, preqrequisites: number[][]): number[] {
  // this problem requires us to use Khan's algorithm
  const result: number[] = [];
  const graph: Map<number, Set<number>> = new Map();
  const indegree = new Array<number>(numCourses).fill(0);

  for (const [u, v] of preqrequisites) {
    if (graph.has(v)) {
      graph.get(v)?.add(u);
    } else {
      graph.set(v, new Set<number>([u]));
    }

    indegree[u] += 1;
  }

  const queue: number[] = [];
  indegree.forEach((value, index) => {
    if (value === 0) {
      queue.push(index);
    }
  });

  while (queue.length) {
    const front = queue.pop() ?? null;
    if (front === null) {
      return result;
    }

    result.push(front);

    const next = graph.get(front) ?? [];
    for (const node of next) {
      const count = indegree?.[node] ?? 0;
      if (count <= 0) {
        continue;
      }

      indegree[node] -= 1;

      if (count - 1 === 0) {
        queue.push(node);
      }
    }
  }

  return result.length < numCourses ? [] : result;
}

export default findOrder;
