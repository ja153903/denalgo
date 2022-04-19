import ListNode from "../../dataStructures/list.ts";

type OptionalListNode = ListNode | null;

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const start = new ListNode(0);
  let slow: OptionalListNode = start;
  let fast: OptionalListNode = start;
  slow.next = head;

  for (let i = 0; i < n + 1; i++) {
    fast = fast?.next ?? null;
  }

  while (fast !== null) {
    fast = fast.next;
    slow = slow?.next ?? null;
  }

  if (slow?.next) {
    slow.next = slow?.next?.next ?? null;
  }

  return start?.next;
}

/**
 * To remove the nth node from the end what do we need to do?
 * 
 * 1. The brute force approach here would be to iterate over the
 * nodes twice. The first time getting the size of the list which would make it simple for us
 * to find which node is nth from the end.
 * 2. There is probably a way to find this using a slow and fast pointer by
 * getting to the middle and figuring out which one is nth from the end that way
 * 
 * Given we have a slow and fast pointer, let's move the fast pointer n + 1 spaces forward
 * so that we have a space of n between the slow and fast pointer.
 * 
 * Then once we do that let's iterate until the fast pointer is null.
 * 
 * Once the fast pointer is null, we should point the slow pointer to its next.next pointer.
 */

export default removeNthFromEnd;
