export function buildGraphFromEdges<T>(
  edges: Array<Array<T>>,
): Map<T, Array<T>> {
  const graph = new Map<T, Array<T>>();

  edges.forEach((edge) => {
    const [u, v] = edge;
    const edges = graph.get(u) ?? [];
    edges.push(v);
    graph.set(u, edges);
  });

  return graph;
}

export function buildIndegreeFromEdges<T>(
  edges: Array<Array<T>>,
): Map<T, number> {
  const indegree = new Map<T, number>();

  edges.forEach((edge) => {
    const [_, v] = edge;
    const count = indegree.get(v) ?? 0;
    indegree.set(v, count + 1);
  });

  return indegree;
}
