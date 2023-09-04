function blockPrint(input) {
  const { alphaMap: alpha } = require("../utils/utils.js");
  // imports and renames aphaMap as alpha

  const trimmedString = input.trim().toLowerCase();
  // removes leading and trailing whitespace from function argument and converts to lowercase

  let blockString = "";

  for (let breakCount = 0; breakCount < 7; breakCount++) {
    // 1st loop iterates each line of the string to return
    for (let i = 0; i < trimmedString.length; i++) {
      // 2nd loop iterates over the input string
      const currentLetter = alpha.get(trimmedString[i]);
      const stringLine = currentLetter.slice(
        breakCount * 6,
        breakCount * 6 + 5
      );

      blockString += stringLine;

      if (breakCount < 7) {
        // adds a space between the characters on the same line
        blockString += " ";
      }
    }

    if (breakCount < 6) {
      // excluding the last line, trims any potential trailing whitespace after completing a line and appends a line-break to start new line
      blockString = blockString.trimEnd();
      blockString += "\n";
    }
  }

  return blockString.trimEnd(); // removes potential final space.
}

// function blockPrint(input) {
//   const { alpha } = require("../utils/utils.js");

//   const trimmedStr = input.trim();
//   let blockStr = "";

//   for (let i = 0; i < 7; i++) {
//     for (let j = 0; j < trimmedStr.length; j++) {
//       const letter = alpha.get(trimmedStr[i].toLowerCase());
//       console.log(letter, "letter");
//       for (let k = 0; letter.length; k++) {
//         console.log(letter[k], "letter at index k")
//         blockStr += letter[k] + "\n";
//         console.log(blockStr, "updated blockStr")
//       }
//     }
//   }

//   console.log(blockStr, "return value");
//   return blockStr;
// }

module.exports = blockPrint;
