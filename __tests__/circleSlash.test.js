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
});
