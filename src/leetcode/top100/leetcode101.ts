import TreeNode from "../../dataStructures/tree.ts";

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  function dfs(left: TreeNode | null, right: TreeNode | null): boolean {
    if (!left && !right) {
      return true;
    }

    if (!left || !right) {
      return false;
    }

    if (left.val !== right.val) {
      return false;
    }

    return (
      dfs(left.left, right.right) &&
      dfs(left.right, right.left)
    );
  }

  return dfs(root.left, root.right);
}

export default isSymmetric;
