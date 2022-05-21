// Write a function which counts vowels in a string

// My solution
//* const findVowels = (str) =>
//*   str.split("").reduce((acc, char) => {
//*     if (
//*       char === "a" ||
//*       char === "e" ||
//*       char === "i" ||
//*       char === "o" ||
//*       char === "u"
//*     ) {
//*       return acc + 1;
//*     }
//*     return acc;
//*   }, 0);

// Beginner solution
//* const findVowels = (str) => {
//*   const vowels = ["a", "e", "i", "o", "u"];
//*   let count = 0;
//*   for (let char of str.toLowerCase()) {
//*     if (vowels.includes(char)) {
//*       count++;
//*     }
//*   }
//*   return count;
//* };

// Advanced solution
const findVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return str
    .toLowerCase()
    .split("")
    .reduce((acc, char) => (vowels.includes(char) ? acc + 1 : acc), 0);
};

console.log(findVowels("Vowels")); // 2
