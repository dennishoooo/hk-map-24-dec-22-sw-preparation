const readlineSync = require("readline-sync");

let total = 0;

while (true) {
  let num = readlineSync.question("input a number, 0 to stop: ");
  if (num === "0") break;
  if (isNaN(parseInt(num))) {
    console.log("dont troll my app, please input a correct number!");
    continue;
  }
  total += parseInt(num);
}

console.log("sum = ", total);
