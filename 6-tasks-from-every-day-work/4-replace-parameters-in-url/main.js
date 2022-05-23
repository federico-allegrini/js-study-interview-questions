// Write a function to Replace parameters in url

const initialUrl = "/posts/:postId/comments/:commentId";

// My solution
//* const replaceParamsInUrl = (initialUrl, params) => {
//*   const initialUrlRoutes = initialUrl.split("/");
//*   params.forEach((param) => {
//*     const indexToReplace = initialUrlRoutes.findIndex(
//*       (route) => route.replace(":", "") === param.from
//*     );
//*     initialUrlRoutes[indexToReplace] = param.to;
//*   });
//*   return initialUrlRoutes.join("/");
//* };

// Solution
// TODO:
// 1. Go through replacements
// 2. Replace parts of each replacements
// 3. Return a new string
const replaceParamsInUrl = (url, replacements) =>
  replacements.reduce(
    (acc, replacement) => acc.replace(":" + replacement.from, replacement.to),
    url
  );

const resultUrl = replaceParamsInUrl(initialUrl, [
  { from: "postId", to: "1" },
  { from: "commentId", to: "3" },
]);
console.log(resultUrl);
