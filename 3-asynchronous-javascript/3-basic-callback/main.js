// Write an asynchronous function which executes callback after finishing it's asynchronous task

const asyncFn = (callback) => {
  window.setTimeout(() => callback("Done"), 2000);
};

asyncFn((message) => {
  console.log("Callback", message);
});

// What problem callbacks solve?
// 1. Make async task and wait for the result
// 2. Inside the async function we don't know what is callback
//    Callback can do whatever in different cases
//    We can easily share our async function
