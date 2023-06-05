const { solution } = require("../katas/arrListLen");

describe("solution()", () => {
  test("should return a list length of 4 when passed the sample array", () => {
    const input = [1, 4, -1, 3, 2];

    expect(solution(input)).toBe(4);
  });
});
