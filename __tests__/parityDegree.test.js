const solution = require("../katas/parityDegree");

describe("solution()", () => {
  test("#1 returns 3 when N is 24", () => {
    const input = solution(24);

    expect(input).toBe(3);
  });

  test("#2 returns 0 when N is 7", () => {
    const input = solution(7);

    expect(input).toBe(0);
  });

  test("#3 returns 0 when N is 1", () => {
    const input = solution(1);

    expect(input).toBe(0);
  });

  test("#4 returns 1 when N is 2", () => {
    const input = solution(2);

    expect(input).toBe(1);
  });

  test("#5 returns 1 when N is 6", () => {
    const input = solution(6);

    expect(input).toBe(1);
  });
});
