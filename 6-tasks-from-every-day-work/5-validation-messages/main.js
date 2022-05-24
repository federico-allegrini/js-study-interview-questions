// Format backend validation message to frontend format

const backendErrors = {
  email: {
    errors: [
      {
        message: "Can't be blank",
      },
    ],
  },
  password: {
    errors: [
      {
        message: "Must contain symbols in different case",
      },
      {
        message: "Must be at least 8 symbols length",
      },
    ],
  },
  passwordConfirmation: {
    errors: [
      {
        message: "Must match with password",
      },
    ],
  },
};

// ["Email: Can't be blank", "Password: Must contain symbols, Must be at least 8 symbols", "passwordConfirmation: Must match with password"]

// My solution
//* const formatBackend = (errors) =>
//*   Object.entries(errors).reduce((accErr, err) => {
//*     return [
//*       ...accErr,
//*       err[0].slice(0, 1).toUpperCase() +
//*         err[0].slice(1).toLowerCase() +
//*         ": " +
//*         err[1].errors.reduce(
//*           (accMsg, msg) =>
//*             (accMsg + (accMsg === "" ? " " : ", ") + msg.message).trim(),
//*           ""
//*         ),
//*     ];
//*   }, []);
//* console.log(formatBackend(backendErrors));

// Solution
//* const humanReadableBackendErrors = (backendErrors) =>
//*   Object.entries(backendErrors).map(
//*     ([field, value]) =>
//*       field.charAt(0).toUpperCase() +
//*       field.slice(1).toLowerCase() +
//*       ": " +
//*       value.errors.map((err) => err.message).join(", ")
//*   );

// Readable solution
const humanReadableBackendErrors = (backendErrors) =>
  Object.entries(backendErrors).map(([field, value]) => {
    const capitalizedField =
      field.charAt(0).toUpperCase() + field.slice(1).toLowerCase();
    const fieldMessages = value.errors.map((err) => err.message).join(", ");
    return `${capitalizedField}: ${fieldMessages}`;
  });

console.log(humanReadableBackendErrors(backendErrors));
