import TreeNode from "../../dataStructures/tree.ts";

export function inorder(root: TreeNode | null) {
  if (root === null) {
    return;
  }

  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
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
