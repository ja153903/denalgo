import ListNode from "../../dataStructures/list.ts";

function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (slow && fast?.next && fast?.next?.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (fast === slow) {
      return true;
    }
  }

  return false;
}

export default hasCycle;
