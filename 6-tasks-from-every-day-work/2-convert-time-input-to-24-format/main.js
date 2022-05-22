// Write a function which can convert the time input given in 12 hours format to 24 hours format

// convertTo24HrsFormat("12:10AM");    // 00:10
// convertTo24HrsFormat("5:00AM");     // 05:00
// convertTo24HrsFormat("12:33PM");    // 12:33
// convertTo24HrsFormat("01:59PM");    // 13:59
// convertTo24HrsFormat("11:8PM");     // 23:08
// convertTo24HrsFormat("10:02PM");    // 22:02

// My solution
//* const convertTo24HrsFormat = (time) => {
//*   const hours = parseInt(time.split(":")[0]);
//*   const minutes = time.split(":")[1].padStart(4, "0").slice(0, 2);
//*   const dayTime = time.split(":")[1].slice(2);
//*   const date = new Date();
//*   dayTime === "AM"
//*     ? date.setHours((hours === 12 ? 0 : hours).toString())
//*     : date.setHours((hours === 12 ? 12 : hours + 12).toString());
//*   return date.getHours().toString().padStart(2, "0") + ":" + minutes;
//* };

// Solution
const convertTo24HrsFormat = (timeText) => {
  const timeTextLower = timeText.toLowerCase();
  let [hours, mins] = timeTextLower.split(":");
  if (timeTextLower.endsWith("am")) {
    hours = hours === "12" ? "0" : hours;
  } else if (timeTextLower.endsWith("pm")) {
    hours = hours === "12" ? hours : String(+hours + 12);
  }
  return hours.padStart(2, 0) + ":" + mins.slice(0, -2).padStart(2, 0);
};

console.log(convertTo24HrsFormat("12:10AM")); // 00:10
console.log(convertTo24HrsFormat("5:00AM")); // 05:00
console.log(convertTo24HrsFormat("12:33PM")); // 12:33
console.log(convertTo24HrsFormat("01:59PM")); // 13:59
console.log(convertTo24HrsFormat("11:8PM")); // 23:08
console.log(convertTo24HrsFormat("10:02PM")); // 22:02
