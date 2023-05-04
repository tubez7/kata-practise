const solution = require("../katas/threeLetters");

describe("solution()", () => {
  test("#1 - should return 'aabaabab' when A = 5 and B = 3", () => {
    const input = solution(5, 3);

    expect(input).toBe("aabababa");
  });

  test("#2 - should return 'bbabb' when A = 1 and B = 4", () => {
    const input = solution(1, 4);

    expect(input).toBe("bbabb");
  });

  test("#3 - should return 'aabaa' when A = 4 and B = 1", () => {
    const input = solution(4, 1);

    expect(input).toBe("aabaa");
  });

  test("#5 - should return 'aabaa' when A = 3 and B = 3", () => {
    const input = solution(3, 3);

    expect(input).toBe("bababa");
  });

  test("#6 - should return 'aabaa' when A = 9 and B = 6", () => {
    const input = solution(9, 6);

    expect(input).toBe("aabaabababababa");
  });
});
