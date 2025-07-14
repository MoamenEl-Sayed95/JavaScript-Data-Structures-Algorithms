class Stack {
    constructor() {
        this.stackList = [];
    }

    getStackList() {
        return this.stackList;
    }

    printStack() {
        for (let i = this.stackList.length - 1; i >= 0; i--) {
            console.log(this.stackList[i]);
        }
    }

    isEmpty() {
        return this.stackList.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.stackList[this.stackList.length - 1];
        }
    }

    size() {
        return this.stackList.length;
    }

    push(value) {
        this.stackList.push(value);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.stackList.pop();
    }
    
}



function reverseString(st) {
    if(!st.length) return st;
    const stack = new Stack();
    for (const ch of st) {
        stack.stackList.push(ch)
    }
    let revSt = '';
    for (let index = stack.stackList.length -1 ; index>= 0; index--) {
        revSt = revSt + stack.stackList[index];   
    }

    return revSt
}



const input1 = "Hello, World!";
const expected1 = "!dlroW ,olleH";
const result1 = reverseString(input1);
console.log(`Input: "${input1}" | Expected: "${expected1}" | Result: "${result1}"`);

const input2 = "abcd";
const expected2 = "dcba";
const result2 = reverseString(input2);
console.log(`Input: "${input2}" | Expected: "${expected2}" | Result: "${result2}"`);

const input3 = "12345";
const expected3 = "54321";
const result3 = reverseString(input3);
console.log(`Input: "${input3}" | Expected: "${expected3}" | Result: "${result3}"`);

const input4 = "";
const expected4 = "";
const result4 = reverseString(input4);
console.log(`Input: "${input4}" | Expected: "${expected4}" | Result: "${result4}"`);


/*
    EXPECTED OUTPUT:
    ----------------
    Input: "Hello, World!" | Expected: "!dlroW ,olleH" | Result: "!dlroW ,olleH"
    Input: "abcd" | Expected: "dcba" | Result: "dcba"
    Input: "12345" | Expected: "54321" | Result: "54321"
    Input: "" | Expected: "" | Result: ""

*/