const rot13 = require("../katas/rot13");

describe("rot13()", () => {
  test("#1 - returns an empty string when passed an empty string as an argument", () => {
    const input = rot13("");

    expect(input).toBe("");
  });

  test("#2 - returns the correctly deciphered string for a single character input", () => {
    const input = rot13("a");

    expect(input).toBe("n");
  });

  test("#3 - returns the correctly deciphered string for a multi character input", () => {
    const input = rot13("ab");

    expect(input).toBe("no");
  });
});
