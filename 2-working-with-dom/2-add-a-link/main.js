// Add a link back to the source of the text after the paragraph tag.(https://forcemipsum.com/)

const link = document.createElement("a");
link.href = "https://forcemipsum.com/";
link.innerText = "Text generated from Lorem Ipsum";
document.body.appendChild(link);
