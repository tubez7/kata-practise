const solution = require("../katas/arrayInversion");

describe("solution()", () => {
  test("#1 - should return 4 with the example array passed as an argument", () => {
    const input = [-1, 6, 3, 4, 7, 4];

    expect(solution(input)).toBe(4);
  });
});
