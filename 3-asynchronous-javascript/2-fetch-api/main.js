// Write an example of fetching data using fetch API.

fetch("https://api.github.com/users/federico-allegrini/repos")
  .then((res) => res.json())
  .then((data) => console.log("Success", data))
  .catch((error) => console.log("Error", error));
