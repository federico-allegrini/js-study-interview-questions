// What will be console.logged here
//
// Question 1
// console.log(foo); // Uncaught ReferenceError: foo is not defined at main.js:4:13
// foo = 1;


// question 2
// console.log(foo); // undefined
// var foo = 2;

// Exactly the same of following code
//* var foo;
//* console.log(foo);
//* foo = 2;
// JS bring the variables declaration on the top, even if the code isn't on the top
// Only for "var" keyword
// This is called hoisting


// question 3
// foo = 3;
// console.log(foo); // 3
// var foo;

// The same concept is applied to functions
//* foo()
//* function foo(){}
// No error

// Hoisting doesn't happen with "const" or "let"
//* fooConst = "no-hoisting";
//* fooLet = "no-hoisting";
//* console.log(fooConst);
//* console.log(fooLet);
//* const fooConst; // Uncaught SyntaxError: Missing initializer in const declaration (at main.js:36:7)
//* let fooLet; // Uncaught ReferenceError: Cannot access 'fooLet' before initialization (at main.js:33:8)
