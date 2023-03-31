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

  it("should return an array containing the most frequent words of the input string when passed a multi-word string", () => {
    const input = topThreeWords("AAA bb. C! dddd, c, Bb/aAA BB!AaA aaa");

    expect(input).toEqual(["aaa", "bb", "c"]);
  });

  it("should return an array containing the most frequent words of the input string when passed a string with a tied most common word", () => {
    const input = "e e e e DDD cc cc ddd DdD: AA ddd ddd aa aA Aa, bb cc cC e e e";

    expect(topThreeWords(input)).toEqual(["e", "ddd", "cc"]);
  });

  it("should return an array containing the 2 most frequent words of the input string when passed a string only containing 2 unique words", () => {
    const input = "  //wont won't won't";

    expect(topThreeWords(input)).toEqual(["won't", "wont"]);
  });
});
