// HT: Two Sum ( ** Interview Question)
// In this exercise, you are tasked with writing a JavaScript function called twoSum.

// The function should accept an array of integers (nums) and an integer (target). Your task is to find two numbers in the array that sum up to the target integer. The function should return an array containing the indices of these two numbers. If no such numbers exist, return an empty array.

// Examples:

// twoSum([2, 7, 11, 15], 9) should return [0, 1] because nums[0] + nums[1] = 2 + 7 = 9.

// twoSum([3, 2, 4], 6) should return [1, 2] because nums[1] + nums[2] = 2 + 4 = 6.

// There are two primary types of hash tables you can use for this exercise:

// Map: A built-in object in JavaScript that allows you to store key-value pairs.

// Object: Another built-in data structure in JavaScript can also be used as a hash table to store key-value pairs.

// You are encouraged to implement this function using both a Map and an Object. This will help you understand the differences and nuances between the two types of hash tables.

//   +=====================================================+
//   |                WRITE YOUR CODE HERE                 |
//   | Description:                                        |
//   | - This function finds two numbers in the array      |
//   |   that add up to the target value.                  |
//   |                                                     |
//   | Return type: array                                  |
//   | - Returns an array containing the indices of the    |
//   |   two numbers that sum to the target.               |
//   | - Returns an empty array if no such numbers exist.  |
//   |                                                     |
//   | Tips:                                               |
//   | - You can use either a Map or an object to track    |
//   |   the numbers and their indices.                    |
//   | - Example with Map:                                 |
//   |   numMap.set(num, i);                               |
//   | - Example with object:                              |
//   |   numObject[num] = i;                               |
//   +=====================================================+

// ---------------
// Unique Solution
// ---------------
console.log("Unique Solution:");
console.log("Input: [2, 7, 11, 15], Target: 9");
console.log("Output: ", JSON.stringify(twoSum([2, 7, 11, 15], 9)));
console.log("---------------");

// ---------------
// Duplicate Numbers
// ---------------
console.log("Duplicate Numbers:");
console.log("Input: [3, 3, 11, 15], Target: 6");
console.log("Output: ", JSON.stringify(twoSum([3, 3, 11, 15], 6)));
console.log("---------------");

// ---------------
// No Solution
// ---------------
console.log("No Solution:");
console.log("Input: [2, 7, 11, 15], Target: 30");
console.log("Output: ", JSON.stringify(twoSum([2, 7, 11, 15], 30)));
console.log("---------------");

// ---------------
// Negative Numbers
// ---------------
console.log("Negative Numbers:");
console.log("Input: [-1, -2, -3, -4, -5], Target: -8");
console.log("Output: ", JSON.stringify(twoSum([-1, -2, -3, -4, -5], -8)));
console.log("---------------");

// ---------------
// Empty Array
// ---------------
console.log("Empty Array:");
console.log("Input: [], Target: 0");
console.log("Output: ", JSON.stringify(twoSum([], 0)));
console.log("---------------");
