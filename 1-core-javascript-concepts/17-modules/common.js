// 1 default export
//* const getName = (name) => name;
//* const getSurname = (surname) => surname;
//* module.exports = (name, surname) => `${getName(name)} ${getSurname(surname)}`;
// Or
// 3 named exports
const getName = (name) => name;
const getSurname = (surname) => surname;
module.exports.getName = getName;
module.exports.getSurname = getSurname;
module.exports.getFullname = (name, surname) =>
  `${getName(name)} ${getSurname(surname)}`;
