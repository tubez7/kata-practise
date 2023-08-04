const { describe } = require('node:test');
const blockPrint = require('../katas/blockLetters.js');
const {alpha} = require("../utils/utils.js");

describe('blockLetters', () => {
  test('returns the correct result for a single character string', () => {
    const input = blockPrint("A");
    const output = alpha.get("A");

    expect(input).toBe(output);
  });
});
