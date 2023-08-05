function blockPrint(input) {
  const { alpha } = require("../utils/utils.js");

  const trimmedStr = input.trim();
  let blockStr = "";
  let breakCount = 0;

  while (breakCount < 7) {
    let i = 0;

    while (i < trimmedStr.length) {
      let j = 0;

      while (j < 5) {
        const blockLetter = alpha
          .get(trimmedStr[i].toLowerCase())
          .slice(breakCount * 6);
        blockStr += blockLetter[j];
        j++;
      }

      if (i < trimmedStr.length - 1) {
        blockStr += " ";
      }

      i++;
    }

    breakCount++;

    if (breakCount < 7) {
      blockStr = blockStr.trimEnd();
      blockStr += "\n";
    }
  }

  return blockStr.trimEnd();
}

module.exports = blockPrint;
