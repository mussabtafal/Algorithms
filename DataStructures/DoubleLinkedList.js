class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let removedNode = this.tail;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }
    this.length--;

    return removedNode;
  }

  shift() {
    if (!this.head) return undefined;
    let removedNode = this.head;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
    }
    this.length--;
    return removedNode;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) return false;
    let current;
    let mid = Math.floor(this.length / 2);
    if (index <= mid) {
      current = this.head;
      let count = 0;
      while (count !== index) {
        count++;
        current = current.next;
      }
      return current;
    } else {
      current = this.tail;
      let count = this.length - 1;
      while (count !== index) {
        count--;
        current = current.prev;
      }
      return current;
    }
  }

  set(index, val) {
    if (index < 0 || index > this.length) {
      return undefined;
    }
    let node = this.get(index);
    node.val = val;
  }

  insert(index, val) {
    if (index < 0 || index > this.length - 1) return undefined;
    if (index === 0) {
      return this.unshift(val);
    } else if (index === this.length - 1) {
      return this.push(val);
    } else {
      let newNode = new Node(val);
      let mid = Math.floor(this.length / 2);
      let current;
      if (index <= mid) {
        let count = 0;
        current = this.head;
        while (count !== index) {
          current = current.next;
          count++;
        }
      } else {
        let count = this.length - 1;
        current = this.tail;
        while (count !== index) {
          current = current.prev;
          count--;
        }
      }
      newNode.prev = current.prev;
      newNode.next = current;
      current.prev.next = newNode;
      current.prev = newNode;
    }
  }

  remove(index) {
    let removed = this.get(index);
    removed.prev.next = removed.next;
    removed.next.prev = removed.prev;
    removed.next = null;
    removed.prev = null;
    this.length--;
  }

  reverse() {
    if (!this.head) return null;
    if (!this.head.next) return this;

    let prev = null;
    let current = this.head;
    this.tail = this.head;

    while (current) {
      let nextNode = current.next;
      current.next = prev;
      current.prev = nextNode;
      prev = current;
      current = nextNode;
    }
    this.head = prev;
    return this;
  }

  printList() {
    let current = this.head;
    let results = [];
    while (current) {
      console.log(current);
      results.push(current.val);
      current = current.next;
    }
    console.log(results);
  }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
// list.pop();
list.unshift(0);
// list.shift();
// list.set(1, "first");
list.insert(2, "second");
list.remove(2);
list.reverse();
list.printList();
// console.log(list.get(2));
