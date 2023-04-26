const { solution } = require("../katas/treeHeight");

describe("solution()", () => {
  test("#1 should return 0 when passed a Tree with no nodes", () => {
    const input = { x: 5, l: null, r: null };

    expect(solution(input)).toBe(0);
  });

  test("#2 should return 0 when passed a Tree with no nodes", () => {
    const input = {
      x: 5,
      l: { x: 3, l: null, r: null },
      r: { x: 10, l: null, r: null },
    };

    expect(solution(input)).toBe(1);
  });

  test("#3 should return 0 when passed a Tree with no nodes", () => {
    const input = {
      x: 5,
      l: {
        x: 3,
        l: { x: 20, l: null, r: null },
        r: { x: 21, l: null, r: null },
      },
      r: { x: 10, l: { x: 1, l: null, r: null }, r: null },
    };

    expect(solution(input)).toBe(2);
  });
});
