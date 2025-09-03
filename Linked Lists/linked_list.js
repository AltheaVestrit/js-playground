class LinkedList {
  // Make HEAD private value, so it can only be accessed from within the object
  #HEAD = null;

  append(value) {
    let newNode = new Node(value);
    // if #HEAD == null (linked list is empty) set newNode as first node (#HEAD = newNode)
    if (this.#HEAD === null) {
      this.#HEAD = newNode;
      return newNode;
    }
    let pointer = this.#HEAD;
    // else set pointer to #HEAD and start walking the linked list until you find a node that points to null (last node)
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    // when pointer is at last node, let it point to newNode. newNode points to null by default
    pointer.nextNode = newNode;
    return newNode;
  }
  prepend(value) {
    let newNode = new Node(value);
    if (this.#HEAD === null) {
      this.#HEAD = newNode;
      return newNode;
    }
    let pointer = this.#HEAD;
    this.#HEAD = newNode;
    newNode.nextNode = pointer;
    return newNode;
  }
  size() {
    if (this.#HEAD === null) {
      return 0;
    }
    let pointer = this.#HEAD;
    let count = 0;
    while (pointer !== null) {
      count += 1;
      pointer = pointer.nextNode;
    }
    return count;
  }
  head() {
    return this.#HEAD.value;
  }
  tail() {
    if (this.#HEAD === null) {
      return null;
    }
    let pointer = this.#HEAD;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    return pointer.value;
  }
  at(index) {
    if (this.#HEAD === null) {
      return null;
    }
    let pointer = this.#HEAD;
    let i = 1;
    while (i < index) {
      if (pointer.nextNode === null) {
        return null;
      }
      pointer = pointer.nextNode;
      i += 1;
    }
    return pointer.value;
  }
  toString() {
    if (this.#HEAD === null) {
      console.log("null");
    }
    let pointer = this.#HEAD;
    let str = ``;
    while (pointer !== null) {
      str += `( ${pointer.value} ) -> `;
      pointer = pointer.nextNode;
    }
    str += `null`;
    return str;
  }
}

class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
// list.prepend("test");
console.log(list.toString());
// console.log(list.size());
// console.log(list.head());
// console.log(list.tail());
// console.log(list.at(6));
