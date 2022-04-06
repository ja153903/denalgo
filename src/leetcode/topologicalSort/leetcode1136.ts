function minimumSemesters(n: number, relations: number[][]): number {
  const graph: Map<number, Set<number>> = new Map();
  const indegree: number[] = new Array<number>(n).fill(0);

  for (const [prevCourse, currCourse] of relations) {
    if (graph.has(prevCourse - 1)) {
      graph.get(prevCourse - 1)?.add(currCourse - 1);
    } else {
      graph.set(prevCourse - 1, new Set([currCourse - 1]));
    }

    indegree[currCourse - 1]++;
  }

  let minSems = 0;
  const queue: number[] = [];

  indegree.forEach((value, index) => {
    if (value === 0) {
      queue.push(index);
    }
  });

  if (queue.length === 0) {
    return -1;
  }

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const front: number | null = queue.shift() ?? null;
      if (front === null) {
        return minSems;
      }

      for (const nextCourse of graph.get(front) ?? []) {
        const count = indegree[nextCourse];
        if (count === 0) {
          return -1;
        }

        indegree[nextCourse]--;

        if (count - 1 === 0) {
          queue.push(nextCourse);
        }
      }
    }

    minSems++;
  }

  return indegree.reduce((a, b) => a + b) === 0 ? minSems : -1;
}

export default minimumSemesters;
