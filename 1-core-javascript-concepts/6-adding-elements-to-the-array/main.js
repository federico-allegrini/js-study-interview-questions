// Write a function which get's an array and an element and returns a array with this element at the end

// Bad approach: push modify the original array
const appendBad = (arr, el) => {
  arr.push(el);
  return arr;
};
const numbersBad = [1, 2];
const newNumbersBad = appendBad(numbersBad, 3);
console.log(numbersBad); // [1, 2, 3]
console.log(newNumbersBad); // [1, 2, 3]

// Safe function: return the same result every time is called with the same parameters
// Pure function: not modify any variable outside the funcion
const appendGood = (arr, el) => [...arr, el];
const numbersGood = [3, 4];
const newNumbersGood = appendGood(numbersGood, 5);
console.log(numbersGood); // [3, 4]
console.log(newNumbersGood); // [3, 4, 5]
