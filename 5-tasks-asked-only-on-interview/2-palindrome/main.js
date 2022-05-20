// Write a function which checks if string is a palindrome
// Same string read from start or from end

// My solution
//* const isPalindrome = (string) =>
//*   string
//*     .split("")
//*     .every((letter, index, str) => letter === str[str.length - 1 - index]);

// Solution
const isPalindrome = (str) => str === str.split("").reverse().join("");

console.log(isPalindrome("fof")); // true
console.log(isPalindrome("foo")); // false
