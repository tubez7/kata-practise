const { circleSlash } = require("../katas/circleSlash");

describe("circleSlash()", () => {
  test("#1: returns 1 when n = 1", () => {
    const input = circleSlash(1);

    expect(input).toBe(1);
  });
});
