// Write a function which can concatenate 2 arrays

// Bad approach: modify always arr1
const mergeArraysBad = (arr1, arr2) => {
  arr1.push(...arr2);
  return arr1;
};
const arr1 = [1];
const arr2 = [2, 3];
const result = mergeArraysBad(arr1, arr2);
console.log(result, arr1, arr2); // [1, 2, 3], [1, 2, 3], [2, 3]

// Good approach: concat does not mutate original array
const mergeArraysGood1 = (arrA, arrB) => {
  return arrA.concat(...arrB);
};
const arrA = [4];
const arrB = [5, 6];
const resultAB = mergeArraysGood1(arrA, arrB);
console.log(resultAB, arrA, arrB); // [4, 5, 6], [4], [5, 6]

// Best approach: spread operator does not mutate original array and is more modern
const mergeArraysGood2 = (arrX, arrY) => [...arrX, ...arrY];
const arrX = [7];
const arrY = [8, 9];
const resultXY = mergeArraysGood2(arrX, arrY);
console.log(resultXY, arrX, arrY); // [7, 8, 9], [7], [8, 9]
