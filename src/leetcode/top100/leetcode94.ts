import TreeNode from "../../dataStructures/tree.ts";

function inorderTraversal(root: TreeNode | null): number[] {
  const result = [];
  const stack: Array<TreeNode> = [];

  while (true) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    if (!stack.length) {
      return result;
    }

    const top = stack.pop();
    if (top) {
      result.push(top.val);
    }

    root = top?.right ?? null;
  }
}

export default inorderTraversal;
