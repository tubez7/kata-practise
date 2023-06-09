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

  test("#4 - returns the correctly deciphered string for a multi character input with a space", () => {
    const input = rot13("a b");

    expect(input).toBe("n o");
  });

  test("#5 - returns the correctly deciphered string for a multi character input with a space and letters from the 2nd half of alphabet", () => {
    const input = rot13("a bz");

    expect(input).toBe("n om");
  });

  test("#6 - returns the correctly deciphered string for a multi character input with a space and letters from the 2nd half of alphabet and capitals", () => {
    const input = rot13("a bZ");

    expect(input).toBe("n oM");
  });

  test("#7 - returns the correctly deciphered string for a complex string", () => {
    const input = "This is my first ROT13 exercise!";
    const output = "Guvf vf zl svefg EBG13 rkrepvfr!";

    expect(rot13(input)).toBe(output);
  });
});
