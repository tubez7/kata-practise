const solution = require("../katas/countBounded");

describe("solution()", () => {
  test("function returns 9 from the given example", () => {
    const input = [3, 5, 7, 6, 3];

    expect(solution(2, input)).toBe(9);
  });

  test("function returns 3 from the given example", () => {
    const input = [3, 5];

    expect(solution(2, input)).toBe(3);
  });

  test("function returns 10 from the given example", () => {
    const input = [21, 9, 3, 4, 14, 27, 5, 7];

    expect(solution(2, input)).toBe(10);
  });
});
