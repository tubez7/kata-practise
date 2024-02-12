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

  describe("incProgress() method of User class when User rank <= activity rank", () => {
    test("calling increaseProgress() method should increase the progress of User class by 3 points when passed a rating equal to the class rank", () => {
      const testUser = new User();
      testUser.incProgress(-8);
      expect(testUser.progress).toBe(3);
    });

    test("completing a task with a ranking 1 less than User rank will increase the User rank by a single point", () => {
      const testUser = new User();
      testUser.rank = -7;
      testUser.incProgress(-8);
      expect(testUser.progress).toBe(1);
    });

    test("completing a task with a ranking of 2 or more lower than User rank will have no effect on User rank", () => {
      const testUser = new User();
      testUser.rank = -6;
      testUser.incProgress(-8);
      expect(testUser.progress).toBe(0);
    });

    test("completing a task with a ranking 1 less than User rank will increase the User rank by a single point when User ranking = 1", () => {
      const testUser = new User();
      testUser.rank = 1;
      testUser.incProgress(-1);
      expect(testUser.progress).toBe(1);
    });
  });

  describe("incProgress() method of User class when User rank < activity rank", () => {
    test("should increase User rank by 10 points when User rank is 1 lank lower", () => {
      const testUser = new User();
      testUser.rank = -1;
      testUser.incProgress(1);
      expect(testUser.progress).toBe(10);
    });
  });
});
