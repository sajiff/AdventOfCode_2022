// A = ROCK = X
// B = PAPER = Y
// C = SCISSORS = Z

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
      //given: rock and rock
      //results: draw and rock
      sum = sum + DRAW + ROCK;
      break;
    case "A Y":
      //given: rock and paper
      //results: win and paper
      sum = sum + WIN + PAPER;
      break;
    case "A Z":
      //given: rock and scissors
      //results: lose and scissors
      sum = sum + LOSE + SCISSORS;
      break;
    case "B X":
      //given: paper and rock
      //results: lose and rock
      sum = sum + LOSE + ROCK;
      break;
    case "B Y":
      //given: paper and paper
      //results: draw and paper
      sum = sum + DRAW + PAPER;
      break;
    case "B Z":
      //given: paper and scissors
      //results: win and scissors
      sum = sum + WIN + SCISSORS;
      break;
    case "C X":
      //given: scissors and rock
      //results: win and rock
      sum = sum + WIN + ROCK;
      break;
    case "C Y":
      //given: scissors and paper
      //results: lose and paper
      sum = sum + LOSE + PAPER;
      break;
    case "C Z":
      //given: scissors and scissors
      //results: draw and scissors
      sum = sum + DRAW + SCISSORS;
      break;
    default:
      break;
  }
});

console.log(sum);
