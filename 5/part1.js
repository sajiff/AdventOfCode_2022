const { readFileSync, promises: fsPromises } = require("fs");

const contents = readFileSync("data.txt", { encoding: "utf-8" });

const data = contents.replace(/\r/g, "");

const [rawCrateData, rawMoves] = data.split("\n\n");

const stackFiltered = rawCrateData
  .split("\n")
  .map((item) => [...item].filter((item, index) => index % 4 === 1));

const crateNumbers = stackFiltered.pop();

let stack = [];

const moves = rawMoves.split("\n");

crateNumbers.map((item) => stack.push([]));

stackFiltered.map((stackLine) =>
  stackLine.map((item, index) => {
    if (item !== " ") {
      stack[index].push(item);
    }
  })
);

stack.map((singleStack, index) => {
  const reverseSingleStack = singleStack.reverse();
  stack[index] = reverseSingleStack;
});

const movesOnlyNumbers = [];

moves.map((item) => {
  const matchedRegx = /move (\d+) from (\d+) to (\d+)/g.exec(item);
  movesOnlyNumbers.push([
    Number(matchedRegx[1]),
    Number(matchedRegx[2]),
    Number(matchedRegx[3]),
  ]);
});

movesOnlyNumbers.map((moves) => {
  for (let index = 0; index < moves[0]; index++) {
    const topBox = stack[moves[1] - 1].pop();
    stack[moves[2] - 1].push(topBox);
  }
});

let message = "";

stack.map((item) => (message += item.at(-1)));

console.log(message);
