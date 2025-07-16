function hasUniqueChars(str) {
    const seen = new Set();
    for (let char of str) {
        if (seen.has(char)) {
            return false;
        }
        seen.add(char);
    }
    return true;
}

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
