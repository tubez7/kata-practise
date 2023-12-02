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
});
