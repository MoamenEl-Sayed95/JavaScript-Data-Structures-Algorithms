class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    let output = "";
    if (temp === null) {
      console.log("empty");
      return;
    }
    while (temp !== null) {
      output += String(temp.value);
      temp = temp.next;
      if (temp !== null) {
        output += " <-> ";
      }
    }
    console.log(output);
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log("Tail: null");
    } else {
      console.log("Tail: " + this.tail.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
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

  reverseBetween(startIndex, endIndex) {
    if (startIndex === endIndex || this.length <= 1) return;

    let current = this.head;
    let idx = 0;

    while (current !== null && idx < startIndex) {
      current = current.next;
      idx++;
    }

    let sublistStart = current;
    let sublistPrev = sublistStart.prev;

    while (current !== null && idx < endIndex) {
      current = current.next;
      idx++;
    }

    let sublistEnd = current;
    let sublistNext = sublistEnd.next;

    let prev = sublistNext;
    current = sublistStart;

    while (current !== sublistNext) {
      let next = current.next;
      current.next = prev;
      if (prev) prev.prev = current;
      prev = current;
      current = next;
    }

    if (sublistPrev !== null) {
      sublistPrev.next = sublistEnd;
      sublistEnd.prev = sublistPrev;
    } else {
      this.head = sublistEnd;
      sublistEnd.prev = null;
    }

    if (sublistNext !== null) {
      sublistStart.next = sublistNext;
      sublistNext.prev = sublistStart;
    } else {
      this.tail = sublistStart;
      sublistStart.next = null;
    }
  }
}

// ------------------
// 🔍 Test Cases
// ------------------

console.log("Test 1: Reverse middle segment (1 to 4)");
const dll1 = new DoublyLinkedList(3);
[8, 5, 10, 2, 1].forEach((n) => dll1.push(n));
console.log("BEFORE:");
dll1.printList();
dll1.reverseBetween(1, 4);
console.log("AFTER:");
dll1.printList();
console.log("-----------------------------------");

console.log("Test 2: Reverse full list");
const dll2 = new DoublyLinkedList(1);
[2, 3, 4, 5].forEach((n) => dll2.push(n));
console.log("BEFORE:");
dll2.printList();
dll2.reverseBetween(0, 4);
console.log("AFTER:");
dll2.printList();
console.log("-----------------------------------");

console.log("Test 3: No-op on single node");
const dll3 = new DoublyLinkedList(9);
console.log("BEFORE:");
dll3.printList();
dll3.reverseBetween(0, 0);
console.log("AFTER:");
dll3.printList();
console.log("-----------------------------------");

console.log("Test 4: Reverse first few nodes");
const dll4 = new DoublyLinkedList(7);
[8, 9].forEach((n) => dll4.push(n));
console.log("BEFORE:");
dll4.printList();
dll4.reverseBetween(0, 2);
console.log("AFTER:");
dll4.printList();
console.log("-----------------------------------");
