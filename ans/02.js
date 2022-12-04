let pattern0 = "+-+-+-+-+-+";

let pattern1 = "-+-+-+-+-";
let pattern2 = "-+-+-";

// start ++
// end --

function printReverseTriangle(pattern) {
  let start = 0;
  let end = pattern.length;
  let space = "";

  while (end > start) {
    console.log(space + pattern.slice(start, end));
    start++;
    end--;
    space += " ";
  }
}
printReverseTriangle(pattern0);
printReverseTriangle(pattern1);
printReverseTriangle(pattern2);

// console.log(pattern.slice(2, pattern.length - 2));
