// Set: Has Unique Chars ( ** Interview Question)
// Your task is to write a function named hasUniqueChars that takes a string as input. Your function should check if all the characters in the string are unique or not. In other words, no character should appear more than once in the string.

// Example

// Input: "hello"

// Output: false

// In this example, the letter 'l' appears two times in the word "hello". So, the function should return false.

// Example

// Input: "world"

// Output: true

// In this example, all the letters are unique, so the function should return true.

// Requirements

// Your function should take a string as an input.

// The function should return a Boolean value: true if all characters are unique, and false otherwise.

// Notes

// The function should consider upper-case and lower-case letters as different. For example, 'A' and 'a' should be considered unique.

// An empty string should return true as it doesn't have any repeated characters.

//   +=====================================================+
//   |                WRITE YOUR CODE HERE                 |
//   | Description:                                        |
//   | - This function checks if all the characters in a   |
//   |   given string are unique.                          |
//   |                                                     |
//   | Return type: Boolean                                |
//   | - Returns true if all characters are unique.        |
//   | - Returns false otherwise.                          |
//   |                                                     |
//   | Tips:                                               |
//   | - You can use a Set to keep track of seen           |
//   |   characters.                                       |
//   | - If a character is already in the Set, you can     |
//   |   return false immediately.                         |
//   +=====================================================+

// ---------------
// Unique Chars
// ---------------
console.log("Unique Chars:");
console.log("Input: 'abc'");
console.log("Output: ", hasUniqueChars("abc"));
console.log("---------------");

// ---------------
// Duplicate Chars
// ---------------
console.log("Duplicate Chars:");
console.log("Input: 'aabb'");
console.log("Output: ", hasUniqueChars("aabb"));
console.log("---------------");

// ---------------
// Single Char
// ---------------
console.log("Single Char:");
console.log("Input: 'a'");
console.log("Output: ", hasUniqueChars("a"));
console.log("---------------");


// ---------------
// Empty String
// ---------------
console.log("Empty String:");
console.log("Input: ''");
console.log("Output: ", hasUniqueChars(""));
console.log("---------------");

// ---------------
// Case Sensitivity
// ---------------
console.log("Case Sensitivity:");
console.log("Input: 'Aa'");
console.log("Output: ", hasUniqueChars("Aa"));
console.log("---------------");
