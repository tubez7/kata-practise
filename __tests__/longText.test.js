const longText = require("../katas/longText.js");

// describe("longText", () => {
//   it("extends vowels", () => {
//     expect(longText("Hello, world!", 3)).toBe("Heeellooo, wooorld!");
//     expect(longText("CodePen is cool!", 4)).toBe(
//       "CoooodeeeePeeeen iiiis cooooooool!"
//     );
//     expect(longText("Challenges", 10)).toBe(
//       "Chaaaaaaaaaalleeeeeeeeeengeeeeeeeeees"
//     );
//   });
// });

describe("longText()", () => {
  it("extends vowels", () => {
    const input = "Hello, world!";
    const output = "Heeellooo, wooorld!";
    expect(longText(input, 3)).toBe(output);
  });

  it("extends vowels when passed a single vowel", () => {
    const input = "a";
    const output = "aaa";
    expect(longText(input, 3)).toBe(output);
  });

  it("extends vowels", () => {
    const input = "CodePen is cool!";
    const output = "CoooodeeeePeeeen iiiis cooooooool!";
    expect(longText(input, 4)).toBe(output);
  });

  it("extends vowels", () => {
    const input = "Challenges";
    const output = "Chaaaaaaaaaalleeeeeeeeeengeeeeeeeeees";
    expect(longText(input, 10)).toBe(output);
  });
});
