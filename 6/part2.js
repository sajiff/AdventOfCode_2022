const { readFileSync, promises: fsPromises } = require("fs");

const contents = readFileSync("data.txt", { encoding: "utf-8" });
// const contents = "bvwbjplbgvbhsrlpgdmjqwftvncz";
// const contents = "nppdvjthqldpwncqszvftbrmjlhg";
// const contents = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg";
// const contents = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw";

const data = contents.replace(/\r/g, "").split("");

let match = "";

for (let i = 0; i < data.length; i++) {
  let startOfMessageMarker = "";

  for (let j = i; j < i + 14; j++) {
    if (data[j]) {
      startOfMessageMarker = startOfMessageMarker + data[j];
    } else {
      startOfMessageMarker = "";
      break;
    }
  }
  if (startOfMessageMarker.length > 0) {
    const matchArray = startOfMessageMarker.split("");
    const matchArrayUnique = [...new Set(matchArray)];
    if (matchArray.length === matchArrayUnique.length) {
      console.log(
        matchArray,
        matchArrayUnique,
        matchArrayUnique.length,
        i + 14
      );
      break;
    }
  } else {
    break;
  }

  // match = data[i] + data[i + 1] + data[i + 2] + data[i + 3];
}
