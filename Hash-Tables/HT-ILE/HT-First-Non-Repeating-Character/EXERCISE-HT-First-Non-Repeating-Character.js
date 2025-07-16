// HT: First Non-Repeating Character ( ** Interview Question)
// In this exercise, your task is to write a JavaScript function named firstNonRepeatingChar.

// The function will take a string as its only parameter. Your goal is to find and return the first character in the string that does not repeat. If every character in the string repeats, or if the string is empty, the function should return null.

// Examples:

// firstNonRepeatingChar("aabbcc") should return null because all the characters appear more than once.

// firstNonRepeatingChar("aabbcde") should return 'c' because it's the first non-repeating character.

// You can solve this problem using either of the two types of hash tables available in JavaScript:

// Map: A built-in object that lets you store key-value pairs in an organized manner.

// Object: A fundamental data structure in JavaScript that can also be used as a hash table for storing key-value pairs.

// Feel free to try solving the exercise using both a Map and an Object to get the hang of using these different types of hash tables.

//   +=====================================================+
//   |                WRITE YOUR CODE HERE                 |
//   | Description:                                        |
//   | - This function finds the first non-repeating       |
//   |   character in a string.                            |
//   |                                                     |
//   | Return type: string/null                            |
//   | - Returns the first non-repeating character if      |
//   |   found, otherwise returns null.                    |
//   |                                                     |
//   | Tips:                                               |
//   | - You can use either a Map or an object to count    |
//   |   the occurrences of each character.                |
//   | - Example with Map:                                 |
//   |   charCounts.set(c, (charCounts.get(c) || 0) + 1);  |
//   | - Example with object:                              |
//   |   charCounts[c] = (charCounts[c] || 0) + 1;         |
//   +=====================================================+

// ---------------
// All Unique
// ---------------
console.log("All Unique:");
console.log("Input: 'abcde'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar("abcde")));
console.log("---------------");

// ---------------
// Some Duplicates
// ---------------
console.log("Some Duplicates:");
console.log("Input: 'aabbccdef'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar("aabbccdef")));
console.log("---------------");

// ---------------
// All Duplicates
// ---------------
console.log("All Duplicates:");
console.log("Input: 'aabbcc'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar("aabbcc")));
console.log("---------------");

// ---------------
// Empty String
// ---------------
console.log("Empty String:");
console.log("Input: ''");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar("")));
console.log("---------------");

// ---------------
// Single Character
// ---------------
console.log("Single Character:");
console.log("Input: 'a'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar("a")));
console.log("---------------");

// ---------------
// Multiple Non-Repeating Chars
// ---------------
console.log("Multiple Non-Repeating Chars:");
console.log("Input: 'abcdaef'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar("abcdaef")));
console.log("---------------");
