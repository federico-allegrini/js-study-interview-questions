p; // Split each new sentence to a separate line in the paragraph text. A sentence can be assumed to be a string of text terminated with a period (.)

const paragraph = document.querySelector("p");

// My solution
//* paragraph.innerHTML = paragraph.innerHTML
//*   .replaceAll("..", "$")
//*   .split(". ")
//*   .map((sentence) => `${sentence}.<br/>`)
//*   .join("")
//*   .replaceAll("$", "..");

// Use only "split" and "join" with regular expressions
// https://regexr.com/
paragraph.innerHTML =
  paragraph.innerHTML.split(/\.[^.|<]/).join(".</p><p>") + "</p>";
