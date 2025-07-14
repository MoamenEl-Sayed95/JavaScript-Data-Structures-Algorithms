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

function isBalancedParentheses(parentheses) {
  if (!parentheses.length) return true;
  if (parentheses.length == 1) return false;

  const st = new Stack();

  for (const ch of parentheses) {
    if (ch == "(") st.push(ch);
    else if (ch == ")" && st.stackList.length) st.pop();
  }

  return !st.stackList.length;
}

const input1 = "(())";
const expected1 = true;
const result1 = isBalancedParentheses(input1);
console.log(`Input: "${input1}" | Expected: ${expected1} | Result: ${result1}`);

const input2 = "(()))";
const expected2 = false;
const result2 = isBalancedParentheses(input2);
console.log(`Input: "${input2}" | Expected: ${expected2} | Result: ${result2}`);

const input3 = "((()))";
const expected3 = true;
const result3 = isBalancedParentheses(input3);
console.log(`Input: "${input3}" | Expected: ${expected3} | Result: ${result3}`);

const input4 = "(((())";
const expected4 = false;
const result4 = isBalancedParentheses(input4);
console.log(`Input: "${input4}" | Expected: ${expected4} | Result: ${result4}`);

/*
    EXPECTED OUTPUT:
    ----------------
    Input: "(())" | Expected: true | Result: true
    Input: "(()))" | Expected: false | Result: false
    Input: "((()))" | Expected: true | Result: true
    Input: "(((())" | Expected: false | Result: false

*/
