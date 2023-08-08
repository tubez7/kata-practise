const blockPrint = require("../katas/blockLetters.js");

describe("blockLetters", () => {
  test.only("returns the correct result for a single character string", () => {
    const input = blockPrint("A");
    const output = " AAA\nA   A\nA   A\nAAAAA\nA   A\nA   A\nA   A";

    expect(input).toBe(output);
  });

  test("returns the correct result for a single character string", () => {
    const input = blockPrint("B");
    const output = "BBBB\nB   B\nB   B\nBBBB\nB   B\nB   B\nBBBB";

    expect(input).toBe(output);
  });

  test("returns the correct result for a double character string", () => {
    const input = blockPrint("AB");
    const output =
      " AAA  BBBB\nA   A B   B\nA   A B   B\nAAAAA BBBB\nA   A B   B\nA   A B   B\nA   A BBBB";

    expect(input).toBe(output);
  });

  test("returns the correct result for a complex string", () => {
    const input = blockPrint("hello world");
    const output =
      "H   H EEEEE L     L      OOO        W   W  OOO  RRRR  L     DDDD\nH   H E     L     L     O   O       W   W O   O R   R L     D   D\nH   H E     L     L     O   O       W   W O   O R   R L     D   D\nHHHHH EEEEE L     L     O   O       W W W O   O RRRR  L     D   D\nH   H E     L     L     O   O       W W W O   O R R   L     D   D\nH   H E     L     L     O   O       W W W O   O R  R  L     D   D\nH   H EEEEE LLLLL LLLLL  OOO         W W   OOO  R   R LLLLL DDDD";

    expect(input).toBe(output);
  });
});
