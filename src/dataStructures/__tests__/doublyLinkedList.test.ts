// TODO: redo these tests
//import { assertEquals } from "../../testingUtils/assertions.ts";
//import { DoublyLinkedList } from "../doublyLinkedList.ts";

//Deno.test("DoublyLinkedList - addTail()", () => {
//const list = new DoublyLinkedList<number>();
//list.addTail(10);

//assertEquals(list.head?.val, 10);
//assertEquals(list.head?.next, null);
//assertEquals(list.head?.prev, null);

//list.addTail(20);

//assertEquals(list.head?.val, 10);
//assertEquals(list.head?.next?.val, 20);
//assertEquals(list.head?.prev?.val, 20);

//list.addTail(30);

//assertEquals(list.head?.val, 10);
//assertEquals(list.head?.next?.val, 20);
//assertEquals(list.head?.prev?.val, 30);
//assertEquals(list.head?.next?.next?.val, 30);
//assertEquals(list.head?.prev?.prev?.val, 20);
//});

//Deno.test("DoublyLinked List - removeTail()", () => {
//const list = new DoublyLinkedList<number>();

//list.addTail(10);
//list.addTail(20);
//list.addTail(15);

//assertEquals(list.removeTail(), 15);
//assertEquals(list.removeTail(), 20);
//assertEquals(list.removeTail(), 10);
//assertEquals(list.removeTail(), null);
//});
