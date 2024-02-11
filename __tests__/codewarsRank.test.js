const User = require("../katas/codewarsRank");

describe("User", () => {
  describe("Basic properties of new instance of User class", () => {
    test("A new instance of User should return a rank of -8", () => {
      const testUser = new User();

      expect(testUser.rank).toBe(-8);
    });

    test("default userId of a new user is 'New User'", () => {
      const testUser = new User();

      expect(testUser.userId).toBe("New User");
    });

    test("userId of a new user is passed as a sole argument of constructor", () => {
      const testUser = new User("Tubes7");

      expect(testUser.userId).toBe("Tubes7");
    });

    test("A new instance of User should return a progress of 0", () => {
      const testUser = new User();

      expect(testUser.progress).toBe(0);
    });
  });

  describe("Methods of User class", () => {
    test("calling increaseProgress() method should increase the progress of User class by 3 points when passed a rating equal to the class rank ", () => {
      const testUser = new User();
      testUser.increaseProgress(-8);
      expect(testUser.progress).toBe(3);
    });
  });
});
