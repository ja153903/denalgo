import ListNode from "../../dataStructures/list.ts";

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  const result = new ListNode(0);
  let runner = result;
  let carry = 0;

  while (l1 || l2) {
    let currentValue = carry;

    if (l1) {
      currentValue += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      currentValue += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(currentValue / 10);
    currentValue %= 10;

    runner.next = new ListNode(currentValue);
    runner = runner.next;
  }

  if (carry > 0) {
    runner.next = new ListNode(carry);
  }

  return result.next;
}

export default addTwoNumbers;
