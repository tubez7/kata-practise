const { circleSlash } = require("../katas/circleSlash");

describe("circleSlash()", () => {
  test("#1: returns 1 when n = 1", () => {
    const input = circleSlash(1);

    expect(input).toBe(1);
  });

  test("#2: returns 1 when n = 2", () => {
    const input = circleSlash(2);

    expect(input).toBe(1);
  });

  test("#3: returns 3 when n = 3", () => {
    const input = circleSlash(3);

    expect(input).toBe(3);
  });

  test("#4: returns 1 when n = 4", () => {
    const input = circleSlash(4);

    expect(input).toBe(1);
  });
});
