// Create throttle function

// Start from last debounce function
const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
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
