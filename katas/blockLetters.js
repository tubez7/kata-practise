function blockPrint(input) {
  const { alpha } = require("../utils/utils.js");
  console.log(input, "original input");

  let blockStr = ""; //str to be returned
  let breakCount = 0; 
  let breakCountLimit = input.length * 7;

  while (breakCount < breakCountLimit) {
    let i = 0;

    while (i < input.length) {
      let j = 0;

      while (j < 5) {
        const blockLetter = breakCount < 1 ? alpha.get(input[i].toLowerCase()).slice(breakCount) : alpha.get(input[i].toLowerCase()).slice((breakCount * 5) + 1);
        blockStr += blockLetter[j];
        j++;
      }

      blockStr += " ";
      i++;
    }


    blockStr += "\n";
    breakCount++;
  }

  // while (i < 5) {
  //   const blockLetter = alpha.get(input[j].toLowerCase());
  //   blockStr += blockLetter[i]
  // }

  // for (i = 0; i < input.length; i++) {
  //   const blockLetter = alpha.get(input[i].toUpperCase());
  //   for (j = 0; j < blockLetter.length; j++) {
  //     if (blockLetter[j] === "\n") {
  //       blockStr
  //     }
  //   }
  // }

  console.log(blockStr, "str to be returned");
 
  //return alpha.get(input.toUpperCase());
  return blockStr;
}

module.exports = blockPrint;
