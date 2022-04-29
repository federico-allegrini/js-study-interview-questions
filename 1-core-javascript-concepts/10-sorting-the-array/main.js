// Sort the array of numbers
const numbers = [5, 2, 7, 9, 1, 3, 4];
// > 0	sort b before a
// < 0	sort a before b
// === 0	keep original order of a and b
numbers.sort((a, b) => a - b);
console.log(numbers);

// Sort array of objects by author's lastname
const books = [
  { name: "Harry Potter", author: "Joanne Rowling" },
  { name: "Warcross", author: "Marie Lu" },
  { name: "The Hunger Games", author: "Suzanne Collins" },
];
books.sort((book1, book2) => {
  const authorLastName1 = book1.author.split(" ")[1];
  const authorLastName2 = book2.author.split(" ")[1];
  return authorLastName1 < authorLastName2 ? -1 : 1;
});
console.log(books);
