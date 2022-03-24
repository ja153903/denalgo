import TreeNode from "../../dataStructures/tree.ts";

export function inorder(root: TreeNode | null): number[] {
  function _inorder(root: TreeNode | null, result: number[]) {
    if (root === null) {
      return;
    }

    _inorder(root.left, result);
    result.push(root.val);
    _inorder(root.right, result);
  }

  if (root === null) {
    return [];
  }

  const result: number[] = [];

  _inorder(root, result);

  return result;
}

export function preorder(root: TreeNode | null) {
  if (root === null) {
    return;
  }

  console.log(root.val);
  inorder(root.left);
  inorder(root.right);
}

export function postorder(root: TreeNode | null) {
  if (root === null) {
    return;
  }

  inorder(root.left);
  inorder(root.right);
  console.log(root.val);
}

export function levelorder(root: TreeNode | null) {
  if (root === null) {
    return;
  }

  const queue: Array<TreeNode | null> = [];

  queue.push(root);

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const front = queue.shift() ?? null;
      if (front === null) {
        return;
      }

      console.log(front.val);

      if (front.left) {
        queue.push(front.left);
      }

      if (front.right) {
        queue.push(front.right);
      }
    }
  }
}
