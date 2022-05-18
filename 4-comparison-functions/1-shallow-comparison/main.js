// Design a shallow comparison function

// Shallow comparison is super performant in comparison to deep comparison
// Shallow comparison can't compare nested objects or arrays

// 1 === 2 => false
// 1 === 1 => true

// Two different reference to the object in memory
// {a:1} === {a:1} => false
// [] === [] => false

// Shallow comparison function resolve this problem only for NOT nested array or object
// So with shallow comparison
// {a:{b:1}} === {a:{b:1}} => false
// [[]] === [[]] => false

// We must use a custom typeOf function
const typeOf = (input) => {
  const rawObject = Object.prototype.toString.call(input).toLowerCase();
  const typeOfRegex = /\[object (.*)]/g;
  const type = typeOfRegex.exec(rawObject)[1];
  return type;
};

const shallowCompare = (source, target) => {
  // We don't compare anything, we return false if the type isn't the same
  if (typeOf(source) !== typeOf(target)) {
    return false;
  }
  // Comparison for array type
  if (typeOf(source) === "array") {
    // We don't compare the values if the length isn't equal
    if (source.length !== target.length) {
      return false;
    }
    // For every element of the source we compare the element of the target
    // The function stop at the end of the array (and return true) or if the value returned is "false" (and return false)
    return source.every((element, index) => element === target[index]);
  }
  // Comparison for object type
  if (typeOf(source) === "object") {
    // We don't compare the values if the number of keys is different
    if (Object.keys(source).length !== Object.keys(target).length) {
      return false;
    }
    // For every key/value of the source we compare the key/value of the target
    // The function stop at the end of the array of keys (and return true) or if the value returned is "false" (and return false)
    return Object.keys(source).every((key) => source[key] === target[key]);
  }
  // Comparison for date type
  if (typeOf(source) === "date") {
    // Compare the numeric value in milliseconds of the source and target
    return source.getTime() === target.getTime();
  }
  // Comparison for all primitives types
  return source === target;
};

// Primitives
console.log(shallowCompare(1, 1)); // true
console.log(shallowCompare(1, 2)); // false
console.log(shallowCompare("a", "a")); // true
console.log(shallowCompare("a", 1)); // false

// Arrays
console.log(shallowCompare([], [])); // true
console.log(shallowCompare([1], [1])); // true
console.log(shallowCompare([1], [2])); // false
console.log(shallowCompare([1, 2], [1, 2])); // true
console.log(shallowCompare([1, 2], [1, 3])); // false
console.log(shallowCompare([1, 2], [1, 2, 3])); // false

// Objects
console.log(shallowCompare({ a: 1 }, { a: 1, b: 1 })); // false
console.log(shallowCompare({ a: 1 }, { a: 1 })); // true
console.log(shallowCompare({ a: 1 }, { b: 1 })); // false

// Dates
console.log(shallowCompare(new Date("01/01/2000"), new Date("01/01/2000"))); // true
console.log(shallowCompare(new Date("01/01/2000"), new Date("02/01/2000"))); // false
