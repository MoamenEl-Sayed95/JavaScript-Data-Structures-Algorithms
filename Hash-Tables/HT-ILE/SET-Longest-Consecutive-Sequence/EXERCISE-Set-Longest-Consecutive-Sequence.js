// Set: Longest Consecutive Sequence ( ** Interview Question)
// Your task is to write a function called longestConsecutiveSequence that takes a list of numbers as input.

// Your function should find and return the length of the longest consecutive sequence of numbers in the list.

// Example 1:

// Input: [1, 2, 3, 4, 5]

// Output: 5

// In this example, the numbers 1, 2, 3, 4, and 5 form a consecutive sequence, and the length is 5.

// Example 2:

// Input: [1, 3, 5, 2, 4]

// Output: 5

// Here, even though the numbers are not in order, they still form a consecutive sequence when arranged. So the length is 5.

// Example 3:

// Input: [2, 1, 4, 7, 3]

// Output: 4

// In this example, when arranged in order, the numbers 1, 2, 3, and 4 form a consecutive sequence. So, the length is 4.

// Example 4:

// Input: [9, 1, 3, 10, 2, 20, 21]

// Output: 3

// Here, the longest consecutive sequence is 9 and 10, or 20 and 21, both having a length of 2.

// Example 5:

// Input: [100, 4, 200, 1, 3, 2]

// Output: 4

// In this example, the longest consecutive sequence is 1, 2, 3, and 4. The length is 4.

// Example 6:

// Input: []

// Output: 0

// In this case, the list is empty. Therefore, the length of the longest consecutive sequence is 0.

// Requirements

// Your function should take a list of numbers as input.

// The function should return a single number, which is the length of the longest consecutive sequence.

// Notes

// The numbers in the list can be in any order.

// If the list is empty, the function should return 0.

// The sequence has to be consecutive numbers (e.g., 1, 2, 3...) but they don't have to be in order in the list.

//   +=====================================================+
//   |                WRITE YOUR CODE HERE                 |
//   | Description:                                        |
//   | - This function finds the length of the longest     |
//   |   consecutive sequence of integers in the given     |
//   |   array.                                            |
//   |                                                     |
//   | Return type: number                                 |
//   | - Returns the length of the longest consecutive     |
//   |   sequence.                                         |
//   | - Returns 0 if the array is empty.                  |
//   |                                                     |
//   | Tips:                                               |
//   | - You can use a Set to track unique numbers.        |
//   | - The function iterates through each unique number  |
//   |   and finds streaks of consecutive numbers.         |
//   +=====================================================+

// -------------------
// No Consecutive Sequence
// -------------------
console.log("No Consecutive Sequence:");
console.log("Input: [1, 3, 5]");
console.log("Output: ", longestConsecutiveSequence([1, 3, 5]));
console.log("---------------");

// -------------------
// Single Element
// -------------------
console.log("Single Element:");
console.log("Input: [1]");
console.log("Output: ", longestConsecutiveSequence([1]));
console.log("---------------");

// -------------------
// Consecutive Sequence
// -------------------
console.log("Consecutive Sequence:");
console.log("Input: [1, 2, 3, 4, 5]");
console.log("Output: ", longestConsecutiveSequence([1, 2, 3, 4, 5]));
console.log("---------------");

// -------------------
// Unordered Input
// -------------------
console.log("Unordered Input:");
console.log("Input: [5, 2, 3, 1, 4]");
console.log("Output: ", longestConsecutiveSequence([5, 2, 3, 1, 4]));
console.log("---------------");

// -------------------
// Empty Array
// -------------------
console.log("Empty Array:");
console.log("Input: []");
console.log("Output: ", longestConsecutiveSequence([]));
console.log("---------------");

// -------------------
// Multiple Sequences
// -------------------
console.log("Multiple Sequences:");
console.log("Input: [1, 2, 3, 10, 11, 12]");
console.log("Output: ", longestConsecutiveSequence([1, 2, 3, 10, 11, 12]));
console.log("---------------");
