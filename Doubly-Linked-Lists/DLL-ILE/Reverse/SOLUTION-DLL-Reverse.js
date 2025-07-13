class Node {
    constructor(value){
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
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
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
 
    push(value){
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

    // WRITE THE REVERSE METHOD HERE //
    reverse() {
        let current = this.head;
        let temp = null;

        // Swap next and prev for all nodes
        while (current !== null) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }

        // Swap head and tail
        temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }


}



let myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(4);
myDoublyLinkedList.push(5);

console.log("Original list:");
myDoublyLinkedList.printList();

myDoublyLinkedList.reverse();
console.log("\nList after reversing:");
myDoublyLinkedList.printList();

// Create a new list with an even number of elements
let myDoublyLinkedList2 = new DoublyLinkedList(1);
myDoublyLinkedList2.push(2);
myDoublyLinkedList2.push(3);
myDoublyLinkedList2.push(4);
myDoublyLinkedList2.push(5);
myDoublyLinkedList2.push(6);

console.log("\nOriginal list 2:");
myDoublyLinkedList2.printList();

myDoublyLinkedList2.reverse();
console.log("\nList 2 after reversing:");
myDoublyLinkedList2.printList();


/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    4
    5
    List after reversing:
    5
    4
    3
    2
    1
    Original list 2:
    1
    2
    3
    4
    5
    6
    List 2 after reversing:
    6
    5
    4
    3
    2
    1
*/
