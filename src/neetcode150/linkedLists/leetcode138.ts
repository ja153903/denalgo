import Node from "../../dataStructures/randomNode.ts";

function copyRandomList(head: Node | null): Node | null {
  // The idea with this problem is to hash all new instances into a map
  // then go over the list another time connecting the results
  const map = new Map<Node | null, Node | null>();
  let runner = head;
  
  while (runner) {
    const node = new Node(runner.val);
    map.set(runner, node);
    runner = runner.next;
  }

  runner = head;

  while (runner) {
    const node = map.get(runner) ?? null;
    if (node) {
      node.next = map.get(runner.next) ?? null;
      node.random = map.get(runner.random) ?? null;
    }

    runner = runner.next;
  }

  return map.get(head) ?? null;
}

export default copyRandomList;
