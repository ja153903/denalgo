import ListNode from "../../dataStructures/list.ts";

function reorderList(head: ListNode | null): void {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  // keep track of prev
  let prev: ListNode | null = null;

  while (fast?.next && fast.next.next) {
    fast = fast?.next?.next;
    prev = slow;
    slow = slow?.next ?? null;
  }

  // slow?.next should now be the second half
  prev = null;
  let curr: ListNode | null = slow?.next ?? null;

  while (curr) {
    const next: ListNode | null = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // if slow?.next still exists as a pointer, we should set it to null
  if (slow?.next) {
    slow.next = null;
  }

  let firstHead: ListNode | null = head;
  let secondHead: ListNode | null = prev;

  while (firstHead && secondHead) {
    const temp = firstHead.next;
    firstHead.next = secondHead;
    secondHead = temp;
    firstHead = firstHead.next;
  }
}

export default reorderList;
