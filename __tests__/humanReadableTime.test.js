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

  test("#5 returns '00:01:01' when argument passed is 61", () => {
    const input = humanReadable(61);
    const output = "00:01:01";

    expect(input).toBe(output);
  });

  test("#6 returns '00:01:59' when argument passed is 119", () => {
    const input = humanReadable(119);
    const output = "00:01:59";

    expect(input).toBe(output);
  });

  test("#7 returns '00:59:59' when argument passed is 3599", () => {
    const input = humanReadable(3599);
    const output = "00:59:59";

    expect(input).toBe(output);
  });

  test("#8 returns '01:00:00' when argument passed is 3600", () => {
    const input = humanReadable(3600);
    const output = "01:00:00";

    expect(input).toBe(output);
  });

  test("#9 returns '01:00:01' when argument passed is 3601", () => {
    const input = humanReadable(3601);
    const output = "01:00:01";

    expect(input).toBe(output);
  });

  test("#10 returns '01:01:01' when argument passed is 3661", () => {
    const input = humanReadable(3661);
    const output = "01:01:01";

    expect(input).toBe(output);
  });

  test("#11 returns '99:59:59' when argument passed is 359999", () => {
    const input = humanReadable(359999);
    const output = "99:59:59";

    expect(input).toBe(output);
  });
});
