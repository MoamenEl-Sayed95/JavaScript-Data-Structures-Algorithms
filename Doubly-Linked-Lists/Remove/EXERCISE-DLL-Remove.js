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

    pop() {
        if (this.length === 0) return undefined;
        let temp = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
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

    shift() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return temp;
    }
    
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        if (index < this.length/2) {
            for (let i = 0; i < index; i++) { 
                temp = temp.next;
            }
        } else {
            temp = this.tail;
            for (let i = this.length - 1; i > index; i--) { 
                temp = temp.prev;
            }
        }
        return temp;
    }

    set(index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return this.push(value);
        if (index === 0) return this.unshift(value);
        
        const newNode = new Node(value);
        const before = this.get(index - 1);
        const after = before.next;
        before.next = newNode;
        newNode.prev = before;
        newNode.next = after;
        after.prev = newNode;
        this.length++;
        return true;
    }

	/// WRITE REMOVE METHOD HERE ///
	//                            //
	//                            //
	//                            //
	//                            //
	////////////////////////////////

 }

 
 function test() {
    let myDLL = new DoublyLinkedList(1);
    myDLL.push(2);
    myDLL.push(3);
    myDLL.push(4);
    myDLL.push(5);

    console.log("DLL before remove():");
    myDLL.printList();

    console.log("\nRemoved node:");
    console.log(myDLL.remove(2).value);
    console.log("DLL after remove() in middle:");
    myDLL.printList();

    console.log("\nRemoved node:");
    console.log(myDLL.remove(0).value);
    console.log("DLL after remove() of first node:");
    myDLL.printList();

    console.log("\nRemoved node:");
    console.log(myDLL.remove(2).value);
    console.log("DLL after remove() of last node:");
    myDLL.printList();
}


test();


/*
    EXPECTED OUTPUT:
    ----------------
    DLL before remove():
    1
    2
    3
    4
    5

    Removed node:
    3
    DLL after remove() in middle:
    1
    2
    4
    5

    Removed node:
    1
    DLL after remove() of first node:
    2
    4
    5

    Removed node:
    5
    DLL after remove() of last node:
    2
    4

*/