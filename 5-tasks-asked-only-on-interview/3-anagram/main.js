// Write a function which checks if string is an anagram

// Anagrams are words that have the same characters in the same quantity. This means that two strings are anagrams if we can rearrange one to get the other.
// Here are some examples of words that are anagrams.
// “listen” and “silent”
// “rail safety” and “fairy tales”
// “dormitory” and “dirty room”
// “the eyes” and “they see”

// My solution
//* const isAnagram = (str1, str2) =>
//*   str1
//*     .split("")
//*     .every((letter1) => str2.split("").find((letter2) => letter1 === letter2));
//* console.log(isAnagram("dormitory", "dirty room")); // true

// Solution
const isAnagram = (str1, str2) => {
  // Check length of strings
  // Performance optimization
  if (str1.length !== str2.length) {
    return false;
  }
  // Convert to lowercase for case insensitive
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();
  // Check if the two string are equal
  if (lowerStr1 === lowerStr2) {
    return false;
  }
  const sortedStr1 = lowerStr1.split("").sort().join("");
  const sortedStr2 = lowerStr2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
};

console.log(isAnagram("foo", "bar")); // false
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("rail safety", "fairy tales")); // true
console.log(isAnagram("the eyes", "they see")); // true
