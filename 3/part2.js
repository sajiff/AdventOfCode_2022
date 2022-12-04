const lowerCaseAlphabets = "abcdefghijklmnopqrstuvwxyz";

const upperCaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const { readFileSync, promises: fsPromises } = require("fs");

const contents = readFileSync("data.txt", "utf-8");

const data = contents.split(/\r?\n/);

let startIndex = 0;

let sum = 0;

[...Array(data.length / 3)].map((item) => {
  const firstElf = data[startIndex].split("");
  const secondElf = data[startIndex + 1].split("");
  const thirdElf = data[startIndex + 2].split("");

  const commonOneAndTwo = [
    ...new Set(firstElf.filter((item) => secondElf.includes(item))),
  ];

  const commonOneandThree = [
    ...new Set(firstElf.filter((item) => thirdElf.includes(item))),
  ];

  const commonTwoAndThree = [
    ...new Set(secondElf.filter((item) => thirdElf.includes(item))),
  ];

  const commonAll = [
    ...new Set(
      commonOneAndTwo
        .filter((item) => commonOneandThree.includes(item))
        .filter((item) => commonTwoAndThree.includes(item))
    ),
  ];

  //   console.log("one and two", commonOneAndTwo);
  //   console.log("one and three", commonOneandThree);
  //   console.log("two and three", commonTwoAndThree);
  //   console.log("common all", commonAll);

  if (commonAll.length > 0) {
    if (lowerCaseAlphabets.indexOf(commonAll[0]) > 0) {
      sum = sum + lowerCaseAlphabets.indexOf(commonAll[0]) + 1;
    }
    if (upperCaseAlphabets.indexOf(commonAll[0]) > 0) {
      sum = sum + upperCaseAlphabets.indexOf(commonAll[0]) + 27;
    }
  }

  startIndex = startIndex + 3;
});

console.log(sum);
