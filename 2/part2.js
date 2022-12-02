// A = ROCK
// B = PAPER
// C = SCISSORS

// X = LOSE
// Y = DRAW
// Z = WIN

// SCORE
// ROCK = 1
// PAPER = 2
// SCISSORS = 3
// LOSE = 0
// DRAW = 3
// WIN = 6

const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;
const LOSE = 0;
const DRAW = 3;
const WIN = 6;

const { readFileSync, promises: fsPromises } = require("fs");

const contents = readFileSync("data.txt", "utf-8");

const data = contents.split(/\r?\n/);

let sum = 0;

data.map((item) => {
  switch (item) {
    case "A X":
      //lose and paper
      sum = sum + LOSE + SCISSORS;
      break;
    case "A Y":
      //draw and rock
      sum = sum + DRAW + ROCK;
      break;
    case "A Z":
      //win and paper
      sum = sum + WIN + PAPER;
      break;
    case "B X":
      //lose and rock
      sum = sum + LOSE + ROCK;
      break;
    case "B Y":
      //draw and paper
      sum = sum + DRAW + PAPER;
      break;
    case "B Z":
      //win and scissors
      sum = sum + WIN + SCISSORS;
      break;
    case "C X":
      //lose and paper
      sum = sum + LOSE + PAPER;
      break;
    case "C Y":
      //draw and scissors
      sum = sum + DRAW + SCISSORS;
      break;
    case "C Z":
      //win and rock
      sum = sum + WIN + ROCK;
      break;
    default:
      break;
  }
});

console.log(sum);
