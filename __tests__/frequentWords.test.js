const topThreeWords = require("../katas/frequentWords");

describe("topThreeWords()", () => {
  it("should return an empty array when no input received", () => {
    const input = topThreeWords();

    expect(input).toEqual([]);
  });

  it("should return an array containing the input string when passed a 1 word string", () => {
    const input = topThreeWords("a");

    expect(input).toEqual(["a"]);
  });

  it("should return an array containing the input string in lowercase when passed a 1 word string in uppercase", () => {
    const input = topThreeWords("A");

    expect(input).toEqual(["a"]);
  });

  it("should return an array containing the words of the input string in lowercase when passed a 2 word string", () => {
    const input = topThreeWords("AAA bb");

    expect(input).toEqual(["aaa", "bb"]);
  });

  it("should return an array containing the words of the input string in lowercase when passed a 2 word string", () => {
    const input = topThreeWords("AAA bb. C! dddd, c, Bb/aAA BB!AaA aaa");

    expect(input).toEqual(["aaa", "bb", "c"]);
  });
});
