class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}
class LinkedListCircular {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertAtStart(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.tail.next = this.head;
  }
  insertAtStartWithoutHead() {
    if (this.tail == null) {
      newNode = this.tail;
      this.tail.next = newNode;
      return;
    }
    newNode.next = this.tail.next;
    this.tail.next = newNode;
  }
  insertAtLast(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
      return;
    }
    newNode.next = this.head;
    this.tail.next = newNode;
    this.tail = newNode;
  }
  removeFirstElem() {
    if (this.head == null) {
      return null;
    }
    if (this.head == this.tail) {
      this.head = null;
      this.tail.next = null;
      return;
    }
    this.head = this.head.next;
    this.tail.next = this.head;
  }
  removeLastElem() {
    if (this.head == null) {
      return null;
    }
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }
    let temp = this.head;
    while (temp.next !== this.tail) {
      temp = temp.next;
    }
    this.tail = temp;
    this.tail.next = this.head;
  }
}
const myCll = new LinkedListCircular();
