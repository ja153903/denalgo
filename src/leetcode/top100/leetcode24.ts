import ListNode from "../../dataStructures/list.ts";

function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }
  
  if (head.next === null) {
    return head;
  }

  const first = head;
  const second = head.next;

  const next = swapPairs(second.next);
  second.next = first;
  first.next = next;
  
  return second;
}

export default swapPairs;