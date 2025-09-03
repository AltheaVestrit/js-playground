export class LinkedList {
  // Make HEAD private value, so it can only be accessed from within the object
  #HEAD = null;

  // Node factory
  Node(value = null) {
    return { value, nextNode: null };
  }

  append(value) {
    let newNode = this.Node(value);
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
    let newNode = this.Node(value);
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
  pop() {
    if (this.#HEAD === null) {
      return null;
    }
    let pointer = this.#HEAD;
    let prev = null;
    while (pointer.nextNode !== null) {
      prev = pointer;
      pointer = pointer.nextNode;
    }
    prev.nextNode = null;
  }
  contains(value) {
    let pointer = this.#HEAD;
    while (pointer !== null) {
      if (pointer.value === value) {
        return true;
      }
      pointer = pointer.nextNode;
    }
    return false;
  }
  find(value) {
    let pointer = this.#HEAD;
    let i = 1;
    while (pointer !== null) {
      if (pointer.value === value) {
        return i;
      }
      pointer = pointer.nextNode;
      i++;
    }
    return null;
  }
  insertAt(value, index) {
    if (index === 1 || this.#HEAD === null) {
      return this.prepend(value);
    }
    let pointer = this.#HEAD;
    let prev = null;
    let i = 1;
    while (i < index) {
      if (pointer === null) {
        return this.append(value);
      }
      prev = pointer;
      pointer = pointer.nextNode;
      i++;
    }
    let newNode = this.Node(value);
    newNode.nextNode = pointer;
    prev.nextNode = newNode;
    return newNode;
  }
  removeAt(index) {
    if (this.#HEAD === null) {
      return null;
    }
    let pointer = this.#HEAD;
    let prev = null;
    if (index === 1) {
      this.#HEAD = this.#HEAD.nextNode;
      return pointer;
    }
    let i = 1;
    while (i < index) {
      if (pointer === null) {
        return null;
      }
      prev = pointer;
      pointer = pointer.nextNode;
      i++;
    }
    prev.nextNode = pointer.nextNode;
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
