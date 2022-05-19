// Design a memoization function which adds 10 to provided value and take it from cache if it was already calculated.
//

// Useful for function with complex calculation
// If the function is called more times with the same parameters, the result is already available in cache
// So the complex function will not be executed more than one time
// Cached values to avoid the same operation again

const memoizeAdd = () => {
  // Create the cache local variable, not accesible from outside
  const cache = {};
  // Create and return an inner function for assign or get the cache value
  // This two thing form a closure
  return (value) => {
    if (value in cache) {
      // If present get the value from cache
      console.log("Fetching from cache");
      return cache[value];
    } else {
      // Else calculate the result
      console.log("Calculating results");
      const result = value + 10;
      // Store in the cache
      cache[value] = result;
      // And return it
      return result;
    }
  };
};

const newAdd = memoizeAdd();
console.log(newAdd(9)); // Output: 19 calculated => See the line 1 "which adds 10 to provided value"
console.log(newAdd(9)); // Output: 19 cache
