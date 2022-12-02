const { readFileSync, promises: fsPromises } = require("fs");

const contents = readFileSync("data.txt", "utf-8");

const data = contents.split(/\r?\n/);

let callorieCount = [];
let sum = 0;
let i = 0;
let highestCalorie = 0;

data.map((item) => {
  if (item !== "") {
    sum = sum + Number(item);
  } else {
    sum = 0;
    i++;
  }
  callorieCount[i] = sum;
});

const callorieCountSorted = callorieCount.sort(function (a, b) {
  return b - a;
});

console.log(callorieCountSorted);

console.log(
  callorieCountSorted[0] + callorieCountSorted[1] + callorieCountSorted[2]
);
