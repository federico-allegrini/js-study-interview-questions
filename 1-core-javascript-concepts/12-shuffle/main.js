// Write a function which implements shuffle

const shuffleItems = (items) =>
  items
    .map((item) => ({ sort: Math.random(), value: item })) // Create a random value for each items
    .sort((item1, item2) => item1.sort - item2.sort) // Sort the items based on the random generated sort value
    .map((a) => a.value); // Remove from array the sort value for get the original array of items

const numbers = [1, 2, 3, 4, 5, 6];
console.log(shuffleItems(numbers));
