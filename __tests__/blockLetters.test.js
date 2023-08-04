const { describe } = require('node:test');
const blockPrint = require('../katas/blockLetters.js');
const {alpha} = require("../utils/utils.js");

describe('blockLetters', () => {
  test.skip('returns the correct result for a single character string', () => {
    const input = blockPrint("a");
    const output = alpha.get("A");

    expect(input).toBe(output);
  });

  test('returns the correct result for a double character string', () => {
    const input = blockPrint("ab");
    const output = alpha.get("A");

    expect(input).toBe(output);
  });
});
