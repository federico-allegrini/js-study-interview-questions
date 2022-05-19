// Design a deep comparison function

const typeOf = (input) => {
  const rawObject = Object.prototype.toString.call(input).toLowerCase();
  const typeOfRegex = /\[object (.*)]/g;
  const type = typeOfRegex.exec(rawObject)[1];
  return type;
};

// Modify in deep comparison
// Really slow for nested object, but do the right thing
const deepCompare = (source, target) => {
  // Same logic for data types
  if (typeOf(source) !== typeOf(target)) {
    return false;
  }
  if (typeOf(source) === "array") {
    if (source.length !== target.length) {
      return false;
    }
    // Call recursively deep comparison for every element of array
    return source.every((element, index) =>
      deepCompare(element, target[index])
    );
  }
  if (typeOf(source) === "object") {
    if (Object.keys(source).length !== Object.keys(target).length) {
      return false;
    }
    // Call recursively deep comparison for every element of object
    return Object.keys(source).every((key) =>
      deepCompare(source[key], target[key])
    );
  }
  // Same logic for dates
  if (typeOf(source) === "date") {
    return source.getTime() === target.getTime();
  }
  // Same logic for primitives
  return source === target;
};

// Nested arrays
console.log(deepCompare([[]], [[]])); // true
console.log(deepCompare([[1]], [[1]])); // true
console.log(deepCompare([1, [1, 2]], [1, [1, 2]])); // true
console.log(deepCompare([1, [1, 2]], [1, [1, 3]])); // false
console.log(
  deepCompare(
    [
      [2, 3],
      [1, 2],
    ],
    [
      [2, 3],
      [1, 2],
    ]
  )
); // true
console.log(
  deepCompare(
    [
      [2, 3],
      [1, 2],
    ],
    [
      [2, 3],
      [1, 3],
    ]
  )
); // false

// Nested objcects
console.log(deepCompare({ a: { b: 1 } }, { a: { b: 1 } })); // true
console.log(deepCompare({ a: { b: 1 } }, { a: { b: 2 } })); // false
console.log(deepCompare({ a: { b: [1, 2] } }, { a: { b: [1, 2] } })); // true
console.log(deepCompare({ a: { b: [1, 2] } }, { a: { b: [1, 3] } })); // false
