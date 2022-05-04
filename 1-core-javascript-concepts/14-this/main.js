// What will be logged here?

// Task 1
// function getItem() {
//   console.log(this);
// }

// getItem(); // window

// Inside a function "this" refers to global object
// In this case is the "window" object
// But change depending on the context

//
// Task 2
// const item = {
//   title: "Ball",
//   getItem() {
//     console.log("this", this);
//   },
// };

// item.getItem(); // {title: 'Ball', getItem: ƒ}
// Inside a method of an object "this" refers to the object
// Then the log will be "{title: 'Ball', getItem: ƒ}"

//
// Task 3.1
// class Item {
//   title = "Ball";
//   getItem() {
//     console.log("this", this);
//   }
// }

// const item = new Item();
// item.getItem(); // Item {title: 'Ball'}
// Inside a method of a class "this" refers to instance of the class
// Then the log will be "Item {title: 'Ball'}"

// Task 3.2
// class Item {
//   title = "Ball";
//   getItem() {
//     const this_ = this; // Solution 1 - Old
//     [1, 2, 3].map(function (item) {
//       console.log("map", this);
//       console.log("map ok", this_);
//     });
//     function someFn() {
//       console.log("this", this);
//     }
//     someFn();
//     const someFnOk = () => { // Solution 2 - Best
//       console.log("this ok", this);
//     };
//     someFnOk();
//   }
// }

// const item = new Item();
// item.getItem();
// map, 3 undefined
// map ok, 3 Item {title: 'Ball'}
// this, undefined
// this ok, Item {title: 'Ball'}

// Inside a function keyword of method of a class "this" refers to global object that is in this case undefined
// Solution 1 - Old
// Declare other variable containing the corrected vale of this outside the function of method
// Solution 2 - Best
// Using arrow function because the arrow function get the context of the parent
