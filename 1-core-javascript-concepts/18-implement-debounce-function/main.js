// Create debounce function

// Useful for send to backend a limited amount of call
// Wait a certain amount of time after every keypress to send the call
const debounce = (func, timeout = 300) => {
  let timer;
  // We must return a function
  return (...args) => {
    clearTimeout(timer); // Abort previous setTimeout
    timer = setTimeout(() => {
      // The keyword "this" refers to "processChange" function
      // The keyword "apply" bind the "func" function to "processChange" function
      func.apply(this, args);
    }, timeout);
  };
};

const saveInput = (name) => console.log("saveInput", name);
const processChange = debounce(saveInput, 2000);
// Only console log the last once, after 2 seconds
processChange("Foo");
processChange("Foo");
processChange("Foo");
processChange("Foo");
