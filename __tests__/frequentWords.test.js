const topThreeWords = require("../katas/frequentWords");

describe("topThreeWords()", () => {
  test("#1. should return an empty array when no input received", () => {
    const input = topThreeWords();

    expect(input).toEqual([]);
  });

  test("#2. should return an array containing the input string when passed a 1 word string", () => {
    const input = topThreeWords("a");

    expect(input).toEqual(["a"]);
  });

  test("#3. should return an array containing the input string in lowercase when passed a 1 word string in uppercase", () => {
    const input = topThreeWords("A");

    expect(input).toEqual(["a"]);
  });

  test("#4. should return an array containing the words of the input string in lowercase when passed a 2 word string", () => {
    const input = topThreeWords("AAA bb");

    expect(input).toEqual(["aaa", "bb"]);
  });

  test("#5. should return an array containing the most frequent words of the input string when passed a multi-word string", () => {
    const input = topThreeWords("AAA bb. C! dddd, c, Bb/aAA BB!AaA aaa");

    expect(input).toEqual(["aaa", "bb", "c"]);
  });

  test("#6. should return an array containing the most frequent words of the input string when passed a string with a tied most common word", () => {
    const input = "e e e e DDD cc cc ddd DdD: AA ddd ddd aa aA Aa, bb cc cC e e e";

    expect(topThreeWords(input)).toEqual(["e", "ddd", "cc"]);
  });

  test("#7. should return an array containing the 2 most frequent words of the input string when passed a string only containing 2 unique words", () => {
    const input = "  //wont won't won't";

    expect(topThreeWords(input)).toEqual(["won't", "wont"]);
  });

  test("#8. should return an array containing the 2 most frequent words of the input string when passed a complex string with line-breaks", () => {
    const input = "In a village of La Mancha, the name of which I have no desire to call to\nmind, there lived not long since one of those gentlemen that keep a lance\nin the lance-rack, an old buckler, a lean hack, and a greyhound for\ncoursing. An olla of rather more beef than mutton, a salad on most\nnights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra\non Sundays, made away with three-quarters of his income.";

    expect(topThreeWords(input)).toEqual(["a", "of", "on"]);
  });

  test("#9. test edge cases for punctuation", () => {
    const input = topThreeWords("'abc, abc', 'abc'");

    expect(input).toEqual(["'abc","abc'", "'abc'"]);
  });

  test("#10. test edge cases for punctuation", () => {
    const input = topThreeWords("  '  ");

    expect(input).toEqual([]);
  });
});
