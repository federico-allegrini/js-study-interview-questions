// Implement a click on todo item as fast as possible

// Bad for performance
// Too many listeners
//* const items = document.querySelectorAll(".item");
//* items.forEach((item) =>
//*   item.addEventListener("click", () => {
//*     console.log("You clicked on item: " + item.innerText);
//*   })
//* );

// One single listener on parent element
const app = document.querySelector(".todo-app");
app.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("item"))
    console.log("You clicked on item: " + e.target.innerText);
});
