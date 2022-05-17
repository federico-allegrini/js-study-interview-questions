// Create a promise function to be able to use callback function via promise approach

const asyncFunc = (callback) => {
  setTimeout(() => {
    callback(1);
  }, 3000);
};
