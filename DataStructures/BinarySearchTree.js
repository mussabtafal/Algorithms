class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.value) return undefined;
        if (val < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.value) {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(val) {
    if (!this.root) return null;
    let current = this.root;
    while (true) {
      if (val === current.value) return current;
      if (val < current.value) {
        if (current.left) {
          current = current.left;
        } else {
          return null;
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          return null;
        }
      }
    }
  }

  bfsTraverse() {
    if (!this.root) return null;
    var node = this.root,
      queue = [],
      data = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  dfsTraversepreOrder() {
    let values = [];
    let current = this.root;

    function traverse(node) {
      values.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(current);
    return values;
  }

  dfsTraversePostOrder() {
    let values = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      values.push(node.value);
    }

    traverse(current);
    return values;
  }

  dfsTraverseInOrder() {
    let values = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      values.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(current);
    return values;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
// console.log(tree.find(10));
console.log(tree);
console.log(tree.bfsTraverse());
console.log(tree.dfsTraversePostOrder());
console.log(tree.dfsTraverseInOrder());
