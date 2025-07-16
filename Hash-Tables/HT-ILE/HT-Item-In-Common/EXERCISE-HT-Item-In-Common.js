// In this exercise, you are tasked with writing a JavaScript function named itemInCommon. This function should take two arrays as its parameters. The goal of the function is to determine whether the two arrays have at least one element in common.

// If there is at least one common element between the two arrays, your function should return true. If there are no common elements, the function should return false.

// Examples:

// itemInCommon([1, 3, 5], [2, 4, 5]) should return true because both arrays contain the number 5.

// itemInCommon([1, 3, 5], [2, 4, 6]) should return false because there are no common items.

// You can use two types of hash tables to solve this problem in JavaScript:

// Map: A built-in object that allows you to store key-value pairs.

// Object: The most basic data structure in JavaScript, which can also act like a hash table for key-value storage.

// Your challenge is to solve this problem using either a Map or an Object. Feel free to try both methods for extra practice!

//   +=====================================================+
//   |                WRITE YOUR CODE HERE                 |
//   | Description:                                        |
//   | - This function checks if two arrays have at least  |
//   |   one item in common.                               |
//   |                                                     |
//   | Return type: bool                                   |
//   | - Returns true if an item is found in both arrays.  |
//   | - Otherwise, returns false.                         |
//   |                                                     |
//   | Tips:                                               |
//   | - You can use either a Map or an object to store    |
//   |   elements from the first array for quick lookup.   |
//   | - Example with Map: myMap.set(i, true);             |
//   | - Example with object: obj[arr1[i]] = true;         |
//   +=====================================================+

// ---------------
// One Common Item
// ---------------
console.log("One Common Item:");
console.log("Input: [1, 3, 5], [2, 4, 5]");
console.log("Output: ", itemInCommon([1, 3, 5], [2, 4, 5]));
console.log("---------------");

// ---------------
// No Common Items
// ---------------
console.log("No Common Items:");
console.log("Input: [1, 3, 5], [2, 4, 6]");
console.log("Output: ", itemInCommon([1, 3, 5], [2, 4, 6]));
console.log("---------------");

// ---------------
// Multiple Common Items
// ---------------
console.log("Multiple Common Items:");
console.log("Input: [1, 2, 3], [2, 3, 4]");
console.log("Output: ", itemInCommon([1, 2, 3], [2, 3, 4]));
console.log("---------------");

// ---------------
// Empty Arrays
// ---------------
console.log("Empty Arrays:");
console.log("Input: [], []");
console.log("Output: ", itemInCommon([], []));
console.log("---------------");

// ---------------
// One Empty Array
// ---------------
console.log("One Empty Array:");
console.log("Input: [1, 2, 3], []");
console.log("Output: ", itemInCommon([1, 2, 3], []));
console.log("---------------");
