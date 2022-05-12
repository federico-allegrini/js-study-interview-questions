// Create throttle function
// The function will be executed immediatly, but after that other executions are ignored for the timeout value

// Start from last debounce function
const throttle = (func, timeout = 300) => {
  let isWaiting = false;
  return (...args) => {
    if (!isWaiting) {
      func.apply(this, args);
      isWaiting = true;
      setTimeout(() => {
        isWaiting = false;
      }, timeout);
    }
  };
};

const saveInput = (name) => console.log("saveInput", name);
const processChange = throttle(saveInput, 2000);
// Only console log the first immediatly and the last after 2.4 seconds
// The other 2 will be ignored
processChange("Foo");
setTimeout(() => processChange("Foo"), 1000);
setTimeout(() => processChange("Foo"), 1200);
setTimeout(() => processChange("Foo"), 2400);
