class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}
class list {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertAtStart(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
  }
  insertAtLast(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }
  removeFromFirst() {
    if (this.head == null) {
      console.log("list is empty");
      return;
    }
    this.head = this.head.next;
  }
  removeFromLast() {
    if (this.head == null) {
      console.log("list is empty");
      return;
    }
    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
      return;
    }

    let temp = this.head;
    while (temp.next.next !== null) {
      temp = temp.next;
    }
    temp.next = null;
    this.tail = temp;
  }
  middleInsert(value, afterValue) {
    const newNode = new Node(value);
    if (this.head === null) {
      console.log("List is empty");
      return;
    }
    let temp = this.head;
    while (temp !== null && temp.data !== afterValue) {
      temp = temp.next;
    }
    newNode.next = temp.next;
    temp.next = newNode;
    if (newNode.next === null) {
      this.tail = newNode;
    }
  }
  reverse() {
    let previous = null;
    let curr = this.head;
    this.tail = this.head;
    while (curr !== null) {
      let next = curr.next;
      curr.next = previous;
      previous = curr;
      curr = next;
    }
    this.head = previous;
  }
  mid() {
    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return console.log(slow.data);
  }
  detectCycle() {
    let isCycle = false;
    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast) {
        isCycle = true;
      }
    }

    if (!isCycle) {
      return null;
    } else {
      let prev = null;
      slow=this.head
      while (slow !== fast) {
        slow = slow.next;
        prev = fast;
        fast = fast.next;
      }
      prev.next = null;

      return slow;
    }
  }
  print() {
    let temp = this.head;
    let result = "";
    while (temp !== null) {
      result += temp.data + "->";
      temp = temp.next;
    }
    result += "null";
    console.log(result);
  }
}
const myList = new list();
myList.insertAtLast(10);
myList.insertAtLast(20);
myList.insertAtLast(30);
myList.print();
myList.reverse();~
myList.print();
myList.mid();
console.log(myList.detectCycle());
