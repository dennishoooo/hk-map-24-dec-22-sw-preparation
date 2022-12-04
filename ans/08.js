const readlineSync = require("readline-sync");

let players = [];
let min = 0;
let max = 100;
let ans = Math.floor(Math.random() * max);
let guess = null;

console.log(ans);
// {name: 'dennis', score: 0, guess: null}

while (true) {
  let name = readlineSync.question("whats your name? ");
  if (name == "") break;
  players.push({ name, guess: null, score: 0 });
}

let str = players.reduce((pv, cv, ci) => {
  if (ci === players.length - 1) return pv + `${cv.name}(${cv.score}).`;
  return pv + `${cv.name}(${cv.score}), `;
}, "");

console.log("Here are the player names and their scores: " + str);

while (guess != ans) {
  for (let player of players) {
    guess = parseInt(
      readlineSync.question(`${player.name}'s guess (${min} - ${max})? `)
    );
    if (guess < min || guess > max) {
      console.log("bye, you lost your chance");
      continue;
    }
    player.guess = guess;
    if (guess > ans) {
      max = guess;
    } else {
      min = guess;
    }

    if (guess == ans) {
      let next = readlineSync.question(
        "continue...(enter no to end the game)? "
      );
      player.score += 1;
      if (next == "no") break;
      guess = null;
      min = 0;
      max = 100;
      ans = Math.floor(Math.random() * max);
    }
    // max = guess > ans ? guess : max
  }
}

console.log(players);
