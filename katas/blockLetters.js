function blockPrint(input) {
  const {alpha} = require("../utils/utils.js");
  console.log(input, "original input");

  console.log(alpha.get(input.toUpperCase()));

  return alpha.get(input.toUpperCase());

};

module.exports = blockPrint;