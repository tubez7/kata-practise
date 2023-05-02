const solution = require("../katas/parkingBill");

describe("solution()", () => {
  test("#1 - returns 5 for cars left in car park for 1hr", () => {
    const input1 = "00:00";
    const input2 = "01:00";

    expect(solution(input1, input2)).toBe(5);
  });

  test("#2 - returns 9 for cars left in car park for under 1-2hrs", () => {
    const input1 = "00:00";
    const input2 = "01:01";

    expect(solution(input1, input2)).toBe(9);
  });

  test("#3 - returns 17 for cars left in car park between 3-4hrs", () => {
    const input1 = "10:00";
    const input2 = "13:21";

    expect(solution(input1, input2)).toBe(17);
  });

  test("#4 - returns 9 for cars left in car park between 2hrs exact", () => {
    const input1 = "09:42";
    const input2 = "11:42";

    expect(solution(input1, input2)).toBe(9);
  });

  test("#5 - returns 5 for cars left under 1hr", () => {
    const input1 = "09:42";
    const input2 = "09:43";

    expect(solution(input1, input2)).toBe(5);
  });
});
