class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
    this.prev = null;
  }
}
class Dll {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertAtStart(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }
  insertAtLast(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
  removeFirstElem() {
    if (this.head == null) {
      return null;
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }
    this.head = this.head.next;
    this.head.prev = null;
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
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
  print() {
    let temp = this.head;
    let result = "";
    while (temp !== null) {
      result += temp.data + "<=> ";
      temp = temp.next;
    }
    result += "null";
    return console.log(result);
  }
}
const myDll = new Dll();
myDll.insertAtStart(10);
myDll.insertAtStart(20);
myDll.insertAtLast(30);
myDll.insertAtLast(1);
myDll.insertAtLast(2);
myDll.removeLastElem();
myDll.removeFirstElem();

myDll.print();

// class node {
//   constructor(key, value) {
//     this.key = key;
//     this.value = value;
//     this.prev = null;
//     this.next = null;
//   }
// }
// class LRU {
//   constructor(capacity = 2) {
//     this.capacity = capacity;
//     this.map = new Map();
//     this.head = new node(0, 0);
//     this.tail = new node(0, 0);
//     this.head.next = this.tail;
//     this.tail.prev = this.head;
//   }
//   insert(node) {
//     node.next = this.head.next;
//     node.prev = this.head;
//     this.head.next.prev = node;
//     this.head.next = node;
//   }
//   remove(node) {
//     node.prev.next = node.next;
//     node.next.prev = node.prev;
//   }
//   get(key) {
//     if (!this.map.has(key)) return -1;
//     const node = this.map.get(key);
//     this.remove(node);
//     this.insert(node);
//     return node.value;
//   }
//   put(key, value) {
//     if (this.map.has(key)) {
//       this.remove(this.map.get(key));
//     }
//     const node = new node(key, value);
//     this.insert(node);
//     this.map.set(key, node);
//     if (this.map.size > this.capacity) {
//       const lru = this.tail.prev;
//       this.remove(lru);
//       this.map.delete(lru.key)
//     }
//   }
// }

