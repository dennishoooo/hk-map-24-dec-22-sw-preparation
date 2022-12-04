let star = "";

const readlineSync = require("readline-sync");

// Wait for user's response.
let noOfStar = parseInt(readlineSync.question("how many stars do you want? "));
// console.log(noOfStar);
// console.log(typeof noOfStar);

// let ans = 100 + parseInt(noOfStar);

// console.log(ans);

for (let i = 0; i < noOfStar; i++) {
  star += "*";
  console.log(star);
}

// slice()
