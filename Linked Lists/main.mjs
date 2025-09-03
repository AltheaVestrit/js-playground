import { LinkedList } from "./linked_list.mjs";

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());

// list.prepend("test");
// console.log(list.size());
// console.log(list.head());
// console.log(list.tail());
// console.log(list.at(6));
// list.pop();
// list.insertAt("test", 7);
list.removeAt(1);
console.log(list.toString());