import TreeNode from "../../dataStructures/tree.ts";

function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDiam = 0;

  function height(root: TreeNode | null): number {
    if (!root) {
      return 0;
    }

    const left = height(root.left);
    const right = height(root.right);

    maxDiam = Math.max(maxDiam, left + right);

    return Math.max(left, right) + 1;
  }

  height(root);

  return maxDiam;
}

export default diameterOfBinaryTree;
