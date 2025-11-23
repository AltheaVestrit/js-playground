// Node factory
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Tree class
class Tree {
  constructor(input) {
    const sortedArray = this.sort(input);
    this.root = this.buildTree(sortedArray, 0, sortedArray.length - 1);
  }
  // Sort array and filter out duplicates
  sort(arr) {
    if (arr.length === 0) return arr;
    arr = arr.sort(function (a, b) {
      return a - b;
    });
    var ret = [arr[0]];
    for (var i = 1; i < arr.length; i++) {
      //Start loop at 1: arr[0] can never be a duplicate
      if (arr[i - 1] !== arr[i]) {
        ret.push(arr[i]);
      }
    }
    return ret;
  }
  // Build the Binary Search Tree
  buildTree(arr, start, end) {
    if (start > end) return null;

    let mid = start + Math.floor((end - start) / 2);
    let root = new Node(arr[mid]);

    // Divide from middle element
    root.left = this.buildTree(arr, start, mid - 1);
    root.right = this.buildTree(arr, mid + 1, end);

    return root;
  }
  // Insert value
  insert(value, root = this.root) {
    if (root === null) {
      return new Node(value);
    }
    if (value < root.data) {
      root.left = this.insert(value, root.left);
    } else {
      root.right = this.insert(value, root.right);
    }
    return root;
  }
  // Delete value
  deleteItem(value, root = this.root) {
    if (root === null) {
      return root;
    }
    if (root.data > value) {
      root.left = this.deleteItem(value, root.left);
    } else if (root.data < value) {
      root.right = this.deleteItem(value, root.right);
    } else {
      // Node with 0 or 1 child
      if (root.left === null) {
        return root.right;
      }
      if (root.right === null) {
        return root.left;
      }

      // Node with 2 children
      const succ = this.getSuccessor(root);
      root.data = succ.data;
      root.right = this.deleteItem(succ.data, root.right);
    }
    return root;
  }
  // Find value
  find(value, root = this.root) {
    if (root === null) {
      return root;
    }
    if (root.data > value) {
      return this.find(value, root.left);
    } else if (root.data < value) {
      return this.find(value, root.right);
    }
    return root;
  }
  // Get successor
  getSuccessor(curr) {
    curr = curr.right;
    while ((curr !== null) & (curr.left !== null)) {
      curr = curr.left;
    }
    return curr;
  }
  // Level order traversal
  levelOrderForEach(
    callback = (node) => {
      node.data;
    },
    root = this.root
  ) {
    let queue = [];
    let result = [];

    if (root === null) return;
    queue.push(root);
    while (queue.length > 0) {
      let current = queue.shift();
      result.push(callback(current));

      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
    }
    return result;
  }
}

// const dataArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// const dataArray = [3, 4, 7, 1, 2, 5, 6, 2, 6];
const dataArray = [2, 3, 4, 5, 6, 7, 8];
let tree = new Tree(dataArray);

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

prettyPrint(tree.root);

console.log(tree.levelOrderForEach());
