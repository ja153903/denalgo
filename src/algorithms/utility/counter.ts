export function generateCounter<T>(items: Array<T>): Map<T, number> {
  const counter = new Map<T, number>();

  for (const item of items) {
    counter.set(item, (counter.get(item) ?? 0) + 1);
  }

  return counter;
}
