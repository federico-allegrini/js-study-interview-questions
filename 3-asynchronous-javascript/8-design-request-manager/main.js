// Design a utility which takes URL and a value for attempts which will attempt to make a fetch request. If on failure it tries again with increasing delay for number of times which user has requested

// My solution
// const requestManager = async (url, attempts = 1) => {
//   let retry = true;
//   let attemptsCounter = 0;
//   while (retry)
//     try {
//       attemptsCounter++;
//       const res = await fetch(url);
//       if (!res.ok) {
//         throw new Error(res.status + " " + res.statusText);
//       }
//       const data = await res.json();
//       console.log(data);
//       retry = false;
//     } catch (err) {
//       console.log(
//         "Error",
//         err,
//         "Attempt " + attemptsCounter + " of " + attempts
//       );
//       retry = attemptsCounter < attempts;
//     }
// };
// requestManager("https://foo.com", 2);

// Solution
const requestManager = (url, options = {}, attempts = 3) => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(resolve)
      .catch((error) => {
        const isLastAttempt = attempts === 1;
        if (isLastAttempt) {
          return reject(error);
        }
        setTimeout(
          () =>
            requestManager(url, options, --attempts)
              .then(resolve)
              .catch(reject),
          3000
        );
      });
  });
};
requestManager("https://foo.com")
  .then((response) => console.log("Response", response))
  .catch((err) => console.log("Error", err));
