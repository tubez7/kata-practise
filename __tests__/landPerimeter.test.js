const landPerimeter = require("../katas/landPerimeter.js");

describe("landPerimeter()", () => {
  it("Will return 0 when passed an empty array", () => {
    const input = landPerimeter([]);

    expect(input).toBe(0);
  });

  it("Will return 4 when a single 'X' present in input array", () => {
    const input = ["OOOOO", "OOOOO", "OOOXO", "OOOOO", "OOOOO"];

    expect(landPerimeter(input)).toBe(4);
  });

  it("Will return 6 when 2 'X's' in sequence in single grid row", () => {
    const input = ["OOOOO", "OOOOO", "OOOXX", "OOOOO", "OOOOO"];

    expect(landPerimeter(input)).toBe(6);
  });

  it("Will return 12 when 2 x 2 'X's' in sequence in a single grid row", () => {
    const input = ["OOOOO", "OOOOO", "XXOXX", "OOOOO", "OOOOO"];

    expect(landPerimeter(input)).toBe(12);
  });

  it("Will return correct result for islands across grid rows", () => {
    const input = ["XXOOO", "OOOOO", "XXOXX", "OOOOO", "OXXXO"];

    expect(landPerimeter(input)).toBe(26);
  });

  it("Will return 6 when 2 'X's' in sequence in single grid column", () => {
    const input = ["OOOOO", "OOOOO", "OOOXO", "OOOXO", "OOOOO"];

    expect(landPerimeter(input)).toBe(6);
  });

  it("Will return 12 when 2 x 2 'X's' in sequence in a single grid column", () => {
    const input = ["OOOXO", "OOOXO", "OOOOO", "OOOXO", "OOOXO"];

    expect(landPerimeter(input)).toBe(12);
  });

  it("should return correct result for 1 island", () => {
    const input = ["OOOOO", "OOOOO", "OOOOO", "XXOOO", "XOOOO"];

    expect(landPerimeter(input)).toBe(8);
  });

  test("a more complex example", () => {
    const input = ["XOOO", "XOXO", "XOXO", "OOXX", "OOOO"];

    expect(landPerimeter(input)).toBe(18);
  });

  test("a further complex example", () => {
    const input = ['XOOXO','XOOXO','OOOXO','XXOXO','OXOOO']; 

    expect(landPerimeter(input)).toBe(24);
  });

  test("codewars complex example", () => {
    const input = ["OXOOOX", "OXOXOO", "XXOOOX", "OXXXOO", "OOXOOX", "OXOOOO", "OOXOOX", "OOXOOO", "OXOOOO", "OXOOXX"]; 

    expect(landPerimeter(input)).toBe(60);
  });

  test("another codewars complex example", () => {
    const input = ["XOOOXOO", "OXOOOOO", "XOXOXOO", "OXOXXOO", "OOOOOXX", "OOOXOXX", "XXXXOXO"]; 

    expect(landPerimeter(input)).toBe(54);
  });
});




