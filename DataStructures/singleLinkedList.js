class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
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
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = this.head.next;
    this.length--;
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(index, val) {
    let node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return current;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index + 1 === this.length) return this.push(val);
    if (index === 0) return this.unshift(val);
    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index + 1 === this.length) return this.pop();
    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return removed;
  }

  printList() {
    let count = 0;
    let current = this.head;
    while (current.next) {
      console.log(current);
      count++;
      current = current.next;
    }
  }

  reverse() {
    if (!this.head) return;
    if (!this.head.next) return this;
    let current = this.head;
    let prev = null;
    this.tail = this.head;
    while (current) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }
    this.head = prev;
    return this;
  }
}

let list = new SingleLinkedList();

list.push(10);
list.push(11);
list.push(12);
// list.pop();
// list.shift();
list.unshift(22);
list.unshift(44);
list.set(1, "!!!!");
list.insert(0, "first");
list.insert(1, "Second");
list.insert(5, "test");
list.get(6);
list.remove(1);
list.reversev2();
list.printList();
// console.log(list);
