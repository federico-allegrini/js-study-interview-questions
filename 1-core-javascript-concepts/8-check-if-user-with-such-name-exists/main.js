// Check that user with such name exists in array of objects

const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
  },
];

// const isNameExists = (name, arr) => arr.map((el) => el.name).indexOf(name) >= 0;
// const isNameExists = (name, arr) => arr.findIndex((el) => el.name === name) >= 0;
// const isNameExists = (name, arr) => Boolean(arr.find((el) => el.name === name));
const isNameExists = (name, arr) => arr.some((el) => el.name === name);

if (isNameExists("Jack", users)) {
  console.log("Exist");
} else {
  console.log("Not exist");
}
