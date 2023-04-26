const solution = require("../katas/strSymmetryPoint");

describe("solution()", () => {
  test("#1 returns 0 when passed a str with a length of 1", () => {
    const input = solution("x");

    expect(input).toBe(0);
  });

  test("#2 returns -1 when passed a str with an even length above 0", () => {
    const input = solution("xxxx");

    expect(input).toBe(-1);
  });

  test("#3 returns correct index when passed a str with symmetry", () => {
    const input = solution("racecar");

    expect(input).toBe(3);
  });

  test("#4 returns -1 when passed an odd length str with no symmetry", () => {
    const input = solution("racecat");

    expect(input).toBe(-1);
  });

  test("#5 returns -1 when passed an empty str", () => {
    const input = solution("");

    expect(input).toBe(-1);
  });
});
