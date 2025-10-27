// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class Queue {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }
//   push(value) {
//     const newNode = new Node(value);
//     if (this.head == null) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//   }
//   pop() {
//     if (this.head === null) return null;
//     this.head = this.head.next;
//   }
//   front() {
//     return this.head.value;
//   }
// }

//* Circular Queue
class Queue {
  constructor() {
    this.size = 5;
    this.array = new Array(this.size);
    this.currSize = 0;
    this.front = 0;
    this.rear = -1;
  }
  push(data) {
    if (this.currSize === this.size) {
      console.log("queue is full");
      ;
    }
    this.rear = (this.rear + 1) % this.size;
    this.array[this.rear] = data;
    this.currSize++;
  }
  pop() {
    if (this.currSize == 0) return null;
    this.front = (this.front + 1) % this.size;
    this.currSize--;

    if (this.currSize === 0) {
      this.front = 0;
      this.rear = -1;
    }
  }
  print(){
    for (let i = 0; i < this.size; i++) {
       
        console.log(this.array[i]);
        
        
    }
  }
}
let q1 = new Queue

q1.push(7)
q1.push(8)
q1.push(3)
q1.push(6)
q1.print()
