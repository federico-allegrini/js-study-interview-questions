// Design a function which returns a fibonacci sequence value
// The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. After that, the next term is defined as the sum of the previous two terms. Hence, the nth term is the sum of (n-1)th term and (n-2)th term.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144;

// My solution
const fibonacciSequence = (number) => {
  const seq = [];
  for (let i = 0; i < number; i++) {
    seq.push(i < 2 ? i : seq[i - 1] + seq[i - 2]);
  }
  return seq;
};
console.log(fibonacciSequence(13));

// Solution
const fibonacci = (n) => (n < 2 ? n : fibonacci(n - 2) + fibonacci(n - 1));
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
console.log(fibonacci(9));
console.log(fibonacci(10));
console.log(fibonacci(11));
console.log(fibonacci(12));
