const { readFileSync, promises: fsPromises } = require("fs");

const contents = readFileSync("data.txt", { encoding: "utf-8" });
// const contents = "bvwbjplbgvbhsrlpgdmjqwftvncz";
// const contents = "nppdvjthqldpwncqszvftbrmjlhg";
// const contents = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg";
// const contents = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw";

const data = contents.replace(/\r/g, "").split("");

let match = "";

for (let i = 0; i < data.length; i++) {
  if (data[i] && data[i + 1] && data[i + 2] && data[i + 3]) {
    match = data[i] + data[i + 1] + data[i + 2] + data[i + 3];
    const matchArray = match.split("");
    const matchArrayUnique = [...new Set(matchArray)];
    if (matchArray.length === matchArrayUnique.length) {
      console.log(matchArray, matchArrayUnique, i + 4);
      return;
    }
  }
}
