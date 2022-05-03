// Find the number of occurences of minimum value in the list

const arr = [1, 2, 3, 1, 1];

const minValue = Math.min(...arr); // Find the minumum value => 1
const minArr = arr.filter((el) => el === minValue).length; // Filter the original array and leave only the minimum number, then take the length of this new array => [1, 1, 1].length = 3
console.log(minArr); // 3
