// Set: Find Pairs ( ** Interview Question)
// Your task is to write a function named findPairs that takes in two lists of numbers (arr1 and arr2) and a target number (target).

// The function should find all pairs where one number from arr1 and one number from arr2 sum up to the target number.

// The function should return these pairs as a list.

// Example

// Input: arr1 = [1, 2, 3], arr2 = [4, 5, 6], target = 7

// Output: [[1, 6], [2, 5], [3, 4]]

// In this example, 1 from arr1 and 6 from arr2 add up to 7. Similarly, 2 and 5, and 3 and 4 also add up to 7. So, the function returns these pairs.

// Requirements

// The function should take in two lists of numbers (arr1 and arr2) and a target number (target).

// The function should return a list of pairs that sum up to the target.

// Notes

// The numbers in arr1 and arr2 can be in any order.

// If no pairs are found that sum up to the target, return an empty list.

// Each pair should be a list where the first number is from arr1 and the second is from arr2.


//   +=====================================================+
//   |                WRITE YOUR CODE HERE                 |
//   | Description:                                        |
//   | - This function finds all the pairs of numbers that |
//   |   sum up to a given target.                         |
//   | - One number is taken from arr1 and the other from  |
//   |   arr2.                                             |
//   |                                                     |
//   | Return type: Array of Arrays                        |
//   | - Returns an array of pairs that sum to the target. |
//   | - Each pair is an array [num1, num2].               |
//   | - Returns an empty array if no such pairs exist.    |
//   |                                                     |
//   | Tips:                                               |
//   | - You can use a Set to keep track of numbers from   |
//   |   arr1.                                             |
//   | - Then iterate through arr2 to find complementing   |
//   |   numbers.                                          |
//   +=====================================================+

// -------------------
// Single Pair Matching
// -------------------
console.log("Single Pair Matching:");
console.log("Input: [1, 2, 3], [4, 5, 6], 7");
console.log("Output: ", findPairs([1, 2, 3], [4, 5, 6], 7));
console.log("---------------");

// -------------------
// Multiple Pairs
// -------------------
console.log("Multiple Pairs:");
console.log("Input: [1, 2, 3], [7, 6, 5], 8");
console.log("Output: ", findPairs([1, 2, 3], [7, 6, 5], 8));
console.log("---------------");

// -------------------
// No Matching Pairs
// -------------------
console.log("No Matching Pairs:");
console.log("Input: [1, 2, 3], [7, 8, 9], 5");
console.log("Output: ", findPairs([1, 2, 3], [7, 8, 9], 5));
console.log("---------------");

// -------------------
// Empty Arrays
// -------------------
console.log("Empty Arrays:");
console.log("Input: [], [], 10");
console.log("Output: ", findPairs([], [], 10));
console.log("---------------");

// -------------------
// One Empty Array
// -------------------
console.log("One Empty Array:");
console.log("Input: [1, 2, 3], [], 4");
console.log("Output: ", findPairs([1, 2, 3], [], 4));
console.log("---------------");
