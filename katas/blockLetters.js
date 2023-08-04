function blockPrint(input) {
  const { alpha } = require('../utils/utils.js');
  console.log(input, 'original input');

  let blockStr = '';

  for (i = 0, j = 0; i < input.length; i++) {
    blockStr[j] += alpha.get(input[i].toUpperCase());
    //set j by length of blockStr
  }

  console.log(blockStr, 'str to be returned');
  //return alpha.get(input.toUpperCase());
  return blockStr;
}

module.exports = blockPrint;
