import ListNode from "../../dataStructures/list.ts";
import PriorityQueue from "../../dataStructures/priorityQueue.ts";

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  // we again use our PQ here.
  // keep track of a minheap
  // where at each time we have k items in our heap
  const pq = new PriorityQueue<ListNode>();
  const result = new ListNode(0);
  let runner = result;

  for (const list of lists) {
    if (list) {
      pq.push(list, -list.val);
    }
  }

  while (pq.length > 0) {
    const min = pq.pop() ?? null;
    if (min) {
      const node = min.value;

      runner.next = new ListNode(node.val);
      runner = runner.next;

      if (node.next) {
        pq.push(node.next, -node.next.val);
      }
    }
  }

  return result.next;
}

export default mergeKLists;
