const blockPrint = require("../katas/blockLetters.js");
const { alpha } = require("../utils/utils.js");

describe("blockLetters", () => {
  test.skip("returns the correct result for a single character string", () => {
    const input = blockPrint("A");
    const output = alpha.get("a");

    expect(input).toBe(output);
  });

  test.skip("returns the correct result for a single character string", () => {
    const input = blockPrint("B");
    const output = alpha.get("b");

    expect(input).toBe(output);
  });

  test("returns the correct result for a double character string", () => {
    const input = blockPrint("AB");
    const output = alpha.get("a");

    expect(input).toBe(output);

  });
});
