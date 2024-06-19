// var stack = [];

// stack.push("google");
// stack.push("Instagram");
// stack.push("Youtube");

// console.log(stack.pop());

// Unisng linkedList

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      //   newNode.next = this.first;
      //   this.first = newNode;
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return this.size;
  }

  pop() {
    if (!this.first) return;
    let oldHead = this.first;
    this.first = oldHead.next;
    this.length--;
    return oldHead;
  }

  print() {
    let current = this.first;
    while (current) {
      console.log(current);
      current = current.next;
    }
  }
}

let stackList = new Stack();
stackList.push(0);
stackList.push(1);
stackList.push(2);
stackList.pop();
stackList.print();
