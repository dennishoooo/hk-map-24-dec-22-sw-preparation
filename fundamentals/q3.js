//Create a mini-game that the game will keep asking the player to guess a number until the number matches the random generated number.
const readline = require('readline-sync');

// const answer = Math.floor(Math.random()*10)
const answer = 5
let input
let count = 0
while (answer != input) {
  input = readline.question("What is your input? ");
  
  if (Number(input) > answer) { // CONDITION 1
    // console.log('you win!!!!')
    console.log('too big')
  } else if (Number(input) < answer) { // CONDITION 2
    console.log('too small')
  }
  else { // CONDITION 3
    console.log('you win!!!')
  }
  // count = count + 1
  // count += 1
  count++
  if (count === 3) {
    console.log('you lose')
    break;
  }
}


