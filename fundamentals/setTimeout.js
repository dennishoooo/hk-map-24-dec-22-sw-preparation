
console.log('program started... ')

// setTimeout(() => {
//   console.log('hello world')
// }, 5000)

let i = 0;
let number = 0

while (i < 5) {
  // console.log(i)
  setTimeout(() => {
    console.log(number)
    number++
    i++
  }, 100)
  // i++
}



// WHILE VERSION
// loop 0: call setTimeout console.log(i)
// loop 1: call setTimeout console.log(i)
// loop 2: call setTimeout console.log(i)
// loop 3: call setTimeout console.log(i)
// loop 4: call setTimeout console.log(i)

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(number)
//   }, 5000)
// }
// FOR LOOP VERSION
// loop 0: call setTimeout console.log(0)
// loop 1: call setTimeout console.log(1)
// loop 2: call setTimeout console.log(2)
// loop 3: call setTimeout console.log(3)
// loop 4: call setTimeout console.log(4)
