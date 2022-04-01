import ListNode from "../../dataStructures/list.ts";

function fastSlowIteration(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast?.next?.next) {
    slow = slow?.next ?? null;
    fast = fast?.next?.next;
  }

  return slow;
}

export default fastSlowIteration;
