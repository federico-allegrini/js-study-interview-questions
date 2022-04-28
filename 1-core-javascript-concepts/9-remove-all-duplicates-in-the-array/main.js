// Remove all duplicates in the array
const duplicateArr = [1, 2, 2, 3, 3, 3];

// Primitive way
//* const uniqueArr = (arr) => {
//*   const result = [];
//*   arr.forEach((item) => {
//*     if (!result.includes(item)) {
//*       result.push(item);
//*     }
//*   });
//*   return result;
//* };

// Functional way
//* const uniqueArr = (arr) => arr.reduce((acc, el) => (acc.includes(el) ? acc : [...acc, el]), []);

// Best way
// Set store unique values of any type
const uniqueArr = (arr) => [...new Set(arr)];

console.log(uniqueArr(duplicateArr));
