import ListNode from "../../dataStructures/list.ts";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const start: ListNode | null = new ListNode(0);
  // to remove Nth from the end, we should get halfway
  let slow: ListNode | null = start;
  let fast: ListNode | null = start;

  start.next = head;

  // Go through n + 1 elements
  for (let i = 0; i <= n && fast !== null; i++) {
    fast = fast?.next;
  }

  // Then go until the end of fast
  while (fast !== null) {
    slow = slow?.next ?? null;
    fast = fast?.next;
  }

  if (slow?.next) {
    slow.next = slow.next?.next;
  }

  return start.next;
}

export default removeNthFromEnd;
