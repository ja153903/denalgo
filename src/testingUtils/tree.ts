import TreeNode from "../dataStructures/tree.ts";

export function buildTreeFromArray(
  nums: Array<number | null>,
): TreeNode | null {
  if (!nums.length) {
    return null;
  }

  const front = nums.shift() ?? null;
  if (front === null) {
    return null;
  }

  const node = new TreeNode(front);

  const queue: Array<TreeNode | null> = [];
  queue.push(node);

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const front = queue.shift() ?? null;
      if (front === null) {
        return node;
      }

      const left = nums.shift() ?? null;
      if (left !== null) {
        const leftNode = new TreeNode(left);
        front.left = leftNode;

        queue.push(leftNode);
      }

      const right = nums.shift() ?? null;
      if (right !== null) {
        const rightNode = new TreeNode(right);
        front.right = rightNode;

        queue.push(rightNode);
      }
    }
  }

  return node;
}
