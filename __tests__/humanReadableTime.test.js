const humanReadable = require("../katas/humanReadableTime");

describe("humanReadable()", () => {
  test("#1 returns '00:00:00' when argument passed is 0 or omitted", () => {
    const input = humanReadable(0);
    const output = "00:00:00";

    expect(input).toBe(output);
  });

  test("#2 returns '00:00:01' when argument passed is 1", () => {
    const input = humanReadable(1);
    const output = "00:00:01";

    expect(input).toBe(output);
  });

  test("#3 returns '00:00:59' when argument passed is 59", () => {
    const input = humanReadable(59);
    const output = "00:00:59";

    expect(input).toBe(output);
  });

  test("#4 returns '00:01:00' when argument passed is 60", () => {
    const input = humanReadable(60);
    const output = "00:01:00";

    expect(input).toBe(output);
  });
});
