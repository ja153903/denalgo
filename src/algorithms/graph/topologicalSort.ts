import { buildGraphFromEdges, buildIndegreeFromEdges } from "./buildGraph.ts";

// Khan's Algorithm
// A way to figure out whether we have a cycle when using a DAG
function khans<T>(edges: Array<Array<T>>) {
  const graph = buildGraphFromEdges<T>(edges);
  const indegree = buildIndegreeFromEdges<T>(edges);

  const queue: Array<T> = [];

  for (const [key, value] of indegree) {
    if (value === 0) {
      queue.push(key);
    }
  }

  while (queue.length) {
    const front: T | null = queue.pop() ?? null;
    if (!front) {
      return;
    }

    console.log(front);

    const next = graph.get(front) ?? [];

    for (const node of next) {
      const count = indegree.get(node) ?? 0;
      // This condition here is something we should consider when
      // trying to look for a cycle
      // if there exists a node whose indegree is already less than
      // or equal to 0, this means that we've already processed this or
      // it should be on the queue therefore, this is a cycle
      if (count <= 0) {
        continue;
      }

      indegree.set(node, count - 1);

      if (count - 1 === 0) {
        queue.push(node);
      }
    }
  }
}

export { khans };
