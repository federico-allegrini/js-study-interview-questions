// 1. Write code to get array of names from given array of users
// 2. Get back only active user names
// 3. Sort users by age descending
const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
    age: 18,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
    age: 30,
  },
];

// 1
const names = users.map((user) => user.name);
console.log("names", names);

// 2
const activeUsersNames = users
  .filter((user) => user.isActive)
  .map((user) => user.name);
console.log("activeUsersNames", activeUsersNames);

// 3
const sortingAgeActiveUsersNames = users
  .sort((user1, user2) => (user1.age < user2.age ? 1 : -1))
  .filter((user) => user.isActive)
  .map((user) => user.name);
console.log("sortingAgeActiveUsersNames", sortingAgeActiveUsersNames);
