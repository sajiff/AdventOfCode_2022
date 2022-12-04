const lowerCaseAlphabets = "abcdefghijklmnopqrstuvwxyz";

const upperCaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const { readFileSync, promises: fsPromises } = require("fs");

const contents = readFileSync("data.txt", "utf-8");

const data = contents.split(/\r?\n/);

let sum = 0;

data.map((d) => {
  const firstHalfArray = d.substring(0, d.length / 2).split("");
  const secondHalfArray = d.substring(d.length / 2).split("");

  const commonItemsArray = firstHalfArray.filter((item) =>
    secondHalfArray.includes(item)
  );

  const commonItemsArrayNoDuplicate = [...new Set(commonItemsArray)];

  if (commonItemsArrayNoDuplicate.length <= 0) {
    sum = sum + 1;
    console.log(d);
  }

  if (commonItemsArrayNoDuplicate.length > 0) {
    if (lowerCaseAlphabets.indexOf(commonItemsArrayNoDuplicate[0]) > 0) {
      sum =
        sum + lowerCaseAlphabets.indexOf(commonItemsArrayNoDuplicate[0]) + 1;
    }
    if (upperCaseAlphabets.indexOf(commonItemsArrayNoDuplicate[0]) > 0) {
      sum =
        sum + upperCaseAlphabets.indexOf(commonItemsArrayNoDuplicate[0]) + 27;
    }
  }
});

console.log(sum);
