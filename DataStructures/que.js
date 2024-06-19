// Using Arrays
let queue = [];

queue.push(0);
queue.push(1);
queue.push(2);

queue.shift();
queue.shift();

queue.unshift(0);
queue.unshift(1);
queue.unshift(2);

queue.pop();
queue.pop();

// Using LinkedLists

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enque(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  deque() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

let q = new Queue();

q.enque(0);
q.enque(1);
q.enque(2);

console.log(q.deque());
console.log(q);
