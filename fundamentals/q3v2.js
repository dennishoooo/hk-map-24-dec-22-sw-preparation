const readline = require('readline-sync');

const answer = 5
let input
let guessRight = false

for (let i = 0; i < 3; i++) {
  input = readline.question("What is your input? ");
  if (Number(input) > answer) { // CONDITION 1
    // console.log('you win!!!!')
    console.log('too big')
  } else if (Number(input) < answer) { // CONDITION 2
    console.log('too small')
  }
  else { // CONDITION 3
    guessRight = true
    break
  }
  console.log({i})

}

if (guessRight) {
  console.log('you win!!!')
} else {
  console.log('you lose')
}
