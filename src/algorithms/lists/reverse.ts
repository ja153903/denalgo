import ListNode from "../../dataStructures/list.ts";

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  let prev: ListNode | null = null;
  let current: ListNode | null = head;

  while (current) {
    const next: ListNode | null = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

export default reverseList;
