// Create a es6 module with function getName, getSurname and default export getFullname.

import getFullname, { getName, getSurname } from "./es6.js";
console.log(
  getName("Federico"),
  getSurname("Allegrini"),
  getFullname("Federico", "Allegrini")
);

// Create the same with commonJS module
// What is the difference?
