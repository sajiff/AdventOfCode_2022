const { readFileSync, promises: fsPromises } = require("fs");

const contents = readFileSync("data.txt", "utf-8");

const data = contents.split(/\r?\n/);

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
  if (highestCalorie < sum) {
    highestCalorie = sum;
  }
});

console.log(highestCalorie);
