// Create a counter function which has increment and getValue functionality

const privateCounter = (val) => {
  let count = 0;
  return {
    increment: (val = 1) => (count += val),
    getValue: () => count,
  };
};

const counter = privateCounter();

console.log(counter.getValue()); // 0
counter.increment();
console.log(counter.getValue()); // 1

console.dir(counter.getValue);
// getValue()
// length: 0
// name: "getValue"
// arguments: (...)
// caller: (...)
// [[FunctionLocation]]: main.js:7
// [[Prototype]]: ƒ ()
// [[Scopes]]: Scopes[3]
// *  0: Closure (privateCounter) {count: 1}
//    1: Script {counter: {…}, privateCounter: ƒ}
//    2: Global {...}

//
const privateSecret = () => {
  const secret = "foo";
  return () => secret;
};
const getSecret = privateSecret();
console.log(getSecret()); // foo
