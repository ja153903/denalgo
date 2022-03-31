import TreeNode from "../../dataStructures/tree.ts";

function maxPathSum(root: TreeNode | null): number {
  let maxPath = Number.NEGATIVE_INFINITY;

  function getMaxGain(node: TreeNode | null): number {
    if (!node) {
      return 0;
    }

    const leftGain = Math.max(0, getMaxGain(node.left));
    const rightGain = Math.max(0, getMaxGain(node.right));

    const currentPath = node.val + leftGain + rightGain;
    maxPath = Math.max(maxPath, currentPath);

    return node.val + Math.max(leftGain, rightGain);
  }

  getMaxGain(root);
  return maxPath;
}

export default maxPathSum;
