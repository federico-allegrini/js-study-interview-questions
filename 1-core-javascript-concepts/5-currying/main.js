// Write a function which helps to achieve multiply(a)(b) and returns product of a and b
//
// const multiply = (num1) => {
//   return (num2) => {
//     return num1 * num2;
//   };
// };
const multiply = (num1) => (num2) => num1 * num2;
console.log(multiply(2)(3)); // 6

// Create a curry function
//
const curry = function (fn) {
  var arity = fn.length;
  return function f1(...args) {
    if (args.length >= arity) {
      return fn(...args);
    } else {
      return function f2(...moreArgs) {
        var newArgs = args.concat(moreArgs);
        return f1(...newArgs);
      };
    }
  };
};
const curriedSum = curry((a, b, c) => a + b + c);
console.log(curriedSum(1)(2, 3)); // 6
console.log(curriedSum(1)(2)(3)); // 6
const partiallyCurriedSum = curriedSum(1);
console.log(partiallyCurriedSum(2, 3)); // 6

// What can your curried function do?
//
// A get function
const get = curry((property, object) => object[property]);
console.log(get("id", { id: 1 }));
const getId = get("id");
console.log(getId({ id: 2, other: "other" })); // 2
//
const map = curry((fn, values) => values.map(fn));
console.log(map(getId, [{ id: 1 }, { id: 2 }])); // [1, 2]
const getIds = map(getId);
console.log(getIds([{ id: 3, other: "other" }, { id: 4 }])); // [1, 2]
