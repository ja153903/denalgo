import ListNode from "../../dataStructures/list.ts";

function isPalindrome(head: ListNode | null): boolean {
  if (!head) {
    return true;
  }

  // Step 1: Get to half
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast?.next) {
    slow = slow?.next ?? null;
    fast = fast?.next?.next;
  }

  // Step 2: Reverse this second half
  let prev: ListNode | null = null;
  let current = slow;

  while (current) {
    const next: ListNode | null = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  while (prev && head) {
    if (prev.val !== head.val) {
      return false;
    }

    prev = prev.next;
    head = head.next;
  }

  return true;
}

export default isPalindrome;
