class Node {
  constructor(key, value = null) {
    this.key = key;
    this.value = value;
    this.nextNode = null;
  }
}

export class LinkedList {
  // Make HEAD private value, so it can only be accessed from within the object
  #HEAD = null;

  set(key, value) {
    let newNode = new Node(key, value);
    // If LL is empty, add new node
    if (this.#HEAD === null) {
      this.#HEAD = newNode;
      return true;
    }
    let pointer = this.#HEAD;
    // If first node matches key, update value
    if (pointer.key === key) {
      pointer.value = value;
      return false;
    }
    // Move pointer along the nodes
    while (pointer !== null) {
      // If any of the other nodes match the key, update value
      if (pointer.key === key) {
        pointer.value = value;
        return false;
      } else if (pointer.nextNode === null) {
        // If no nodes match the key, add new node
        pointer.nextNode = newNode;
        return true;
      }
      pointer = pointer.nextNode;
    }
  }
  get(key) {
    let pointer = this.#HEAD;
    while (pointer !== null) {
      if (pointer.key === key) {
        return pointer.value;
      }
      pointer = pointer.nextNode;
    }
    return null;
  }
  remove(key) {
    let pointer = this.#HEAD;
    if (pointer.key === key) {
      this.#HEAD = this.#HEAD.nextNode;
      return true;
    }
    let prev = null;
    while (pointer !== null) {
      if (pointer.key === key) {
        prev.nextNode = pointer.nextNode;
        return true;
      }
      prev = pointer;
      pointer = pointer.nextNode;
    }
    return false;
  }
  has(key) {
    let pointer = this.#HEAD;
    while (pointer !== null) {
      if (pointer.key === key) {
        return true;
      }
      pointer = pointer.nextNode;
    }
    return false;
  }
  length() {
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
  keys() {
    let pointer = this.#HEAD;
    let arr = [];
    while (pointer !== null) {
      arr.push(pointer.key);
      pointer = pointer.nextNode;
    }
    return arr;
  }
  values() {
    let pointer = this.#HEAD;
    let arr = [];
    while (pointer !== null) {
      arr.push(pointer.value);
      pointer = pointer.nextNode;
    }
    return arr;
  }
  entries() {
    let pointer = this.#HEAD;
    let arr = [];
    while (pointer !== null) {
      arr.push([pointer.key, pointer.value]);
      pointer = pointer.nextNode;
    }
    return arr;
  }
}
