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
});
