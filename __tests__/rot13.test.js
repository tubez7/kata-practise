const rot13 = require("../katas/rot13");

describe("rot13()", () => {
  test("#1 - returns an empty string when passed an empty string as an argument", () => {
    const input = rot13("");

    expect(input).toBe("");
  });
});
