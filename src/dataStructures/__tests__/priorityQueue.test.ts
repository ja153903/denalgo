import { assertEquals } from "../../testingUtils/assertions.ts";
import PriorityQueue from "../priorityQueue.ts";

Deno.test("PriorityQueue - push()", () => {
  const pq = new PriorityQueue<number>();

  pq.push(1, 1);
  pq.push(2, 2);

  assertEquals(pq.peek()?.value, 2);
});

Deno.test("PriorityQueue - pop()", () => {
  const pq = new PriorityQueue<number>();

  pq.push(1, 1);
  pq.push(2, 2);

  assertEquals(pq.peek()?.value, 2);
  assertEquals(pq.pop()?.value, 2);

  pq.push(3, 3);
  pq.push(4, 4);
  pq.push(0, 0);
  pq.push(-1, -1);

  assertEquals(pq.peek()?.value, 4);
  assertEquals(pq.pop()?.value, 4);
  assertEquals(pq.pop()?.value, 3);
  assertEquals(pq.pop()?.value, 1);

  assertEquals(pq.peek()?.value, 0);
});

Deno.test("PriorityQueue - MinHeap Implementation", () => {
  const pq = new PriorityQueue<number>();

  pq.push(1, -1);
  pq.push(2, -2);

  assertEquals(pq.peek()?.value, 1);
});
