function blockPrint(input) {
  const { alphaMap: alpha } = require("../utils/utils.js"); //renames aphaMap as alpha

  const trimmedStr = input.trim();
  let blockStr = '';
  //let breakCount = 0;

  for (let breakCount = 0; breakCount < 7; breakCount++) {
    //let i = 0;

    for (let i = 0; i < trimmedStr.length; i++) {
      let j = 0;

      while (j < 5) {
        const blockLetter = alpha
          .get(trimmedStr[i].toLowerCase())
          .slice(breakCount * 6);
        console.log(blockLetter, "blockLetter at index = ", j);
        blockStr += blockLetter[j];
        j++;
      }

      if (i < trimmedStr.length - 1) {
        blockStr += ' ';
      }

      // i++;
    }

    //breakCount++;

    if (breakCount < 7) {
      blockStr = blockStr.trimEnd();
      blockStr += "\n";
    }
  }

  return blockStr.trimEnd();
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
