const firstUnique = require("../katas/firstUnique");

describe("firstUnique()", () => {
  test("#1 returns the element when passed an array with only 1 element", () => {
    const input = firstUnique([1]);

    expect(input).toBe(1);
  });

  test("#2 returns the correct first unique element in a multi element array", () => {
    const input = [4, 10, 5, 4, 2, 10];

    expect(firstUnique(input)).toBe(5);
  });

  test("#3 returns the correct first unique element in a multi element array", () => {
    const input = [1, 4, 3, 3, 1, 2];

    expect(firstUnique(input)).toBe(4);
  });

  test("#4 returns -1 when passed an array with no unique numbers", () => {
    const input = [6, 4, 4, 6];

    expect(firstUnique(input)).toBe(-1);
  });

  test("#5 does not mutate input array", () => {
    const input = [6, 4, 4, 6];

    firstUnique(input);

    expect(input).toEqual([6, 4, 4, 6]);
  });

  test("#6 returns -1 when passed an empty array", () => {
    const input = [];

    expect(firstUnique(input)).toBe(-1);
  });
});
