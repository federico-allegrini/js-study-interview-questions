// Create a es6 module with function getName, getSurname and default export getFullname.

// import getFullname, { getName, getSurname } from "./es6.js";
// console.log(
//   getName("Federico"),
//   getSurname("Allegrini"),
//   getFullname("Federico", "Allegrini")
// );

//
// Create the same with commonJS module
// Use "node" command and comment the es6 import
//
// 1 default export
//* const getFullname = require("./common");
// Or
// 3 named exports
const { getName, getSurname, getFullname } = require("./common");
console.log(
  getName("Federico"),
  getSurname("Allegrini"),
  getFullname("Federico", "Allegrini")
);

// What is the difference?
// ES6 modules
// 1.1. Native and exclusive for browser
// 1.2. Can be used inside Node.JS, but as a sugar, not native
// 2.1 Can not be used inside a if statement or a foor loop, always at the top of the page
// 2.2 If is not at the top, it will parsed automatically to the top by JS
// CommonJS module
// 1. Required and exclusive for Node.JS
