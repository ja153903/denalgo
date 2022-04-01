import ListNode from "../../dataStructures/list.ts";

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  if (headA === null || headB === null) {
    return null;
  }

  let currA: ListNode | null = headA;
  let currB: ListNode | null = headB;

  while (currA && currB && currA !== currB) {
    currA = currA.next;
    currB = currB.next;

    if (currA === currB) {
      return currA;
    }

    if (currA === null) {
      currA = headB;
    }

    if (currB === null) {
      currB = headA;
    }
  }

  return currA;
}

export default getIntersectionNode;
