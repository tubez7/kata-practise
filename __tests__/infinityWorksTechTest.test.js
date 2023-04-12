const maxPath = require("../katas/infinityWorksTechTest");

describe("solution #4", () => {
  test("test #1 should return 3", () => {
    const input1 = [1, 8, 7, 3, 4, 1, 8];
    const input2 = [6, 4, 1, 8, 5, 1, 7];

    expect(maxPath(input1, input2)).toBe(3);
  });

  test("test #2 should return 2", () => {
    const input1 = [5, 5, 5, 7, 7, 7];
    const input2 = [3, 4, 5, 1, 3, 7];

    expect(maxPath(input1, input2)).toBe(2);
  });

  test("test #3 should return 4", () => {
    const input1 = [6, 10, 1, 4, 3];
    const input2 = [2, 5, 3, 1, 6];

    expect(maxPath(input1, input2)).toBe(4);
  });

  test("test #4 should return 4", () => {
    const input1 = [4, 1, 5, 4];
    const input2 = [4, 5, 1, 3];

    expect(maxPath(input1, input2)).toBe(3);
  });
});
