// HT: Group Anagrams ( ** Interview Question)
// In this exercise, your task is to write a JavaScript function named groupAnagrams.

// The function will take an array of strings as its parameter. Your goal is to group anagrams from the given list of strings. An anagram is a word or phrase that forms a different word or phrase when the letters are rearranged.

// Your function should return an array of arrays, where each inner array contains a group of anagram strings.

// Examples:

// groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']) should return [ ['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat'] ].

// groupAnagrams(['abc', 'cab', 'bca', 'xyz', 'zyx']) should return [ ['abc', 'cab', 'bca'], ['xyz', 'zyx'] ].


// You can solve this problem using either of the two types of hash tables available in JavaScript:

// Map: A built-in object that lets you store key-value pairs in an organized manner.

// Object: A fundamental data structure in JavaScript that can also be used as a hash table for storing key-value pairs.

// Your goal is to implement this function using both a Map and an Object to understand the nuances of the syntax of these different hash table types.


//   +=====================================================+
//   |                 WRITE YOUR CODE HERE                |
//   | Description:                                        |
//   | - This function groups anagrams from an array       |
//   |   of strings.                                       |
//   |                                                     |
//   | Return type: array                                  |
//   | - Returns an array of arrays where each array       |
//   |   contains anagrams.                                |
//   |                                                     |
//   | Tips:                                               |
//   | - You can use either a Map or an object to manage   |
//   |   the groups of anagrams.                           |
//   | - Example with Map:                                 |
//   |   anagramGroups.set(canonical, group);              |
//   | - Example with object:                              |
//   |   anagramGroups[canonical] = group;                 |
//   +=====================================================+


// ---------------
// Lowercase Anagrams
// ---------------
console.log("Lowercase Anagrams:");
console.log("Input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']");
console.log("Output: ", JSON.stringify(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])));
console.log("---------------");

// ---------------
// Mixed Case Anagrams
// ---------------
console.log("Mixed Case Anagrams:");
console.log("Input: ['Eat', 'Tea', 'Tan', 'Ate', 'Nat', 'Bat']");
console.log("Output: ", JSON.stringify(groupAnagrams(['Eat', 'Tea', 'Tan', 'Ate', 'Nat', 'Bat'])));
console.log("---------------");

// ---------------
// No Anagrams
// ---------------
console.log("No Anagrams:");
console.log("Input: ['hello', 'world', 'test']");
console.log("Output: ", JSON.stringify(groupAnagrams(['hello', 'world', 'test'])));
console.log("---------------");

// ---------------
// Empty Strings
// ---------------
console.log("Empty Strings:");
console.log("Input: ['', '', '']");
console.log("Output: ", JSON.stringify(groupAnagrams(['', '', ''])));
console.log("---------------");

// ---------------
// Single Characters
// ---------------
console.log("Single Characters:");
console.log("Input: ['a', 'b', 'a']");
console.log("Output: ", JSON.stringify(groupAnagrams(['a', 'b', 'a'])));
console.log("---------------");