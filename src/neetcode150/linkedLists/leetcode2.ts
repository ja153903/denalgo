import ListNode from "../../dataStructures/list.ts";

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const result = new ListNode(0);
  let runner = result;

  let carry = 0;

  while (l1 !== null || l2 !== null) {
    let current = carry;

    if (l1 !== null) {
      current += l1.val;
      l1 = l1.next;
    }

    if (l2 !== null) {
      current += l2.val;
      l2 = l2.next;
    }

    runner.next = new ListNode(current % 10);
    runner = runner.next;

    carry = Math.floor(current / 10);
  }

  if (carry > 0) {
    runner.next = new ListNode(carry);
  }

  return result.next;
}

export default addTwoNumbers;
