// You have 2 functions which return promises. Map data from users and userStatuses to get array of users with id, name, isActive

const users = [
  {
    id: 1,
    name: "Jack",
  },
  {
    id: 2,
    name: "John",
  },
  {
    id: 3,
    name: "Mike",
  },
];
const userStatuses = [
  {
    id: 1,
    isActive: true,
  },
  {
    id: 2,
    isActive: true,
  },
  {
    id: 3,
    isActive: false,
  },
];

const getUsers = () => {
  return new Promise((resolve) => {
    resolve(users);
  });
};

const getUserStatuses = () => {
  return new Promise((resolve) => {
    resolve(userStatuses);
  });
};

// My solution
//* getUsers().then((users) => {
//*   getUserStatuses().then((userStatuses) => {
//*     const mappedUsers = userStatuses.map((userStatus) => ({
//*       ...userStatus,
//*       name: users[userStatus.id - 1].name,
//*     }));
//*     console.log(mappedUsers);
//*   });
//* });

// Beginner approach
//* getUsers().then((users) => {
//*   getUserStatuses().then((userStatuses) => {
//*     const mappedUsers = users.map((user) => {
//*       const isActive = userStatuses.find(
//*         (userStatus) => userStatus.id === user.id
//*       ).isActive;
//*       return { ...user, isActive };
//*     });
//*     console.log(mappedUsers);
//*   });
//* });

// Advanced approach
const mapUsers = (users, userStatuses) =>
  users.map((user) => {
    const isActive = userStatuses.find(
      (userStatus) => userStatus.id === user.id
    ).isActive;
    return { ...user, isActive };
  });
Promise.all([getUsers(), getUserStatuses()])
  .then(([users, userStatuses]) => mapUsers(users, userStatuses))
  .then((mappedUsers) => console.log(mappedUsers));
