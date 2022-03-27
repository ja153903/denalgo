import Node from "../../dataStructures/randomNode.ts";

function copyRandomList(head: Node | null): Node | null {
  const map = new Map<Node | null, Node | null>();
  let runner = head;

  while (runner) {
    map.set(runner, new Node(runner.val));
    runner = runner.next;
  }

  runner = head;

  while (runner) {
    const node = map.get(runner) ?? null;
    if (!node) {
      break;
    }

    node.next = map.get(runner?.next) ?? null;
    node.random = map.get(runner?.random) ?? null;

    runner = runner.next;
  }

  return map.get(head) ?? null;
}

export default copyRandomList;
