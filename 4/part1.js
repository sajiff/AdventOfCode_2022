const { readFileSync, promises: fsPromises } = require("fs");

const contents = readFileSync("data.txt", "utf-8");

const data = contents.split(/\r?\n/);

let totalNumber = 0;

data.map((d) => {
  const firstElf = d.split(",")[0];
  const secondelf = d.split(",")[1];

  //   console.log("first elf", firstElf);
  //   console.log("second elf", secondelf);

  if (
    Number(firstElf.split("-")[0]) >= Number(secondelf.split("-")[0]) &&
    Number(firstElf.split("-")[1]) <= Number(secondelf.split("-")[1])
  ) {
    // console.log("overlap");
    totalNumber = totalNumber + 1;
  } else if (
    Number(firstElf.split("-")[0]) <= Number(secondelf.split("-")[0]) &&
    Number(firstElf.split("-")[1]) >= Number(secondelf.split("-")[1])
  ) {
    // console.log("overlap");
    totalNumber = totalNumber + 1;
  }
  //   else {
  //     console.log("does not overlap");
  //   }

  //   console.log("-----------------------");
});

console.log(totalNumber);
