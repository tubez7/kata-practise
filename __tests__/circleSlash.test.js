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

  test("#5: returns 3 when n = 5", () => {
    const input = circleSlash(5);

    expect(input).toBe(3);
  });

  test("#6: returns 5 when n = 6", () => {
    const input = circleSlash(6);

    expect(input).toBe(5);
  });

  test("#7: returns 7 when n = 7", () => {
    const input = circleSlash(7);

    expect(input).toBe(7);
  });

  test("#8: returns 1 when n = 8", () => {
    const input = circleSlash(8);

    expect(input).toBe(1);
  });

  test("#9: returns 17 when n = 264", () => {
    const input = circleSlash(264);

    expect(input).toBe(17);
  });
});
