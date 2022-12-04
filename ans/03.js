const readlineSync = require("readline-sync");

let numbers = readlineSync.question("'please input a list of numbers: ");

let numArr = numbers.split(",");

console.log(numArr);

let result = numArr.reduce((pv, cv, idx) => {
  console.log({ idx, pv, cv });
  return parseInt(cv) + pv;
}, 0);

console.log(result);
