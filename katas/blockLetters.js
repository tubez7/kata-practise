function blockPrint(input) {
  const { alpha } = require("../utils/utils.js");

  let blockStr = "";
  let breakCount = 0;
  const characterLimit = input.length * 41;

  while (blockStr.length < characterLimit) {
    let i = 0;
    console.log(blockStr.length, "inside 1st loop");

    while (i < input.length) {
      let j = 0;

      while (j < 5) {
        const blockLetter = alpha
          .get(input[i].toLowerCase())
          .slice(breakCount * 6);
        console.log(blockLetter, "sliced in > 0---", j, breakCount * 6);
        blockStr += blockLetter[j];
        console.log(blockStr.length, "inside letter loop");

        j++;
      }

      if (i < input.length - 1) {
        blockStr += " ";
        console.log(blockStr.length);
      }

      i++;
    }

    breakCount++;

    if (breakCount < 7) {
      blockStr += "\n";
      console.log(blockStr.length);
    }
  }

  // const compare = alpha.get(input.toLowerCase());

  console.log(blockStr, "str to be returned", blockStr.length);
  // console.log(compare, compare.length);

  //return alpha.get(input.toUpperCase());
  return blockStr;
}

// console.log(blockPrint("abc"));
// console.log(blockPrint("heLLo WorLD"));

module.exports = blockPrint;
