// Design a deep comparison function

const typeOf = (input) => {
  const rawObject = Object.prototype.toString.call(input).toLowerCase();
  const typeOfRegex = /\[object (.*)]/g;
  const type = typeOfRegex.exec(rawObject)[1];
  return type;
};

// Start from shallow comparison
const shallowCompare = (source, target) => {
  if (typeOf(source) !== typeOf(target)) {
    return false;
  }
  if (typeOf(source) === "array") {
    if (source.length !== target.length) {
      return false;
    }
    return source.every((element, index) => element === target[index]);
  }
  if (typeOf(source) === "object") {
    if (Object.keys(source).length !== Object.keys(target).length) {
      return false;
    }
    return Object.keys(source).every((key) => source[key] === target[key]);
  }
  if (typeOf(source) === "date") {
    return source.getTime() === target.getTime();
  }
  return source === target;
};
