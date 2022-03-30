import TreeNode from "../../dataStructures/tree.ts";

const SPLITTER = ",";
const NULL_NODE = "NN";

function serialize(root: TreeNode | null): string {
  const result: string[] = [];

  _buildString(root, result);

  return result.join("");
}

function _buildString(root: TreeNode | null, result: string[]) {
  if (root === null) {
    result.push(NULL_NODE);
    result.push(SPLITTER);
  } else {
    result.push(root.val.toString());
    result.push(SPLITTER);

    _buildString(root.left, result);
    _buildString(root.right, result);
  }
}

function deserialize(data: string): TreeNode | null {
  const nodes = data.split(SPLITTER);

  return _buildTree(nodes);
}

function _buildTree(nodes: string[]): TreeNode | null {
  const front = nodes.shift() ?? null;
  if (front === NULL_NODE || front === null) {
    return null;
  }

  const node = new TreeNode(parseInt(front));
  node.left = _buildTree(nodes);
  node.right = _buildTree(nodes);

  return node;
}

export { deserialize, serialize };
