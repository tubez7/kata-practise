const solution = require("../katas/countBounded");

describe("solution()", () => {
  test("function returns 9 from the given example", () => {
    const input = [3, 5, 7, 6, 3];

    expect(solution(2, input)).toBe(9);
  });
});
