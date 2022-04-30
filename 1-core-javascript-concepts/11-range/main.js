// Write a function which implement range

// Not good: low level
//* const range = (start, end) => {
//*   const result = [];
//*   for (let i = start; i <= end; i++) {
//*     result.push(i);
//*   }
//*   return result;
//* };

// Optimal
// Array(N) => Generate empty array of N elements
// .keys() => Transform empty values in numbers, starting from 0
// [...] => Spread the values in a new array
// .map(el) => el + X) => Transform the array in a new array with correct values, starting from X
const range = (start, end) => [...Array(end).keys()].map((el) => el + start);

const arr = range(1, 50);
console.log(arr); // 1,2,3,4,5,6,...,50
