const User = require("../katas/codewarsRank");

describe("User", () => {
  describe("Basic properties of new instance of User class", () => {
    test("User class should have 'rank' property", () => {
      const testUser = new User();

      expect(Object.hasOwn(testUser, "rank")).toBe(true);
    });

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

    test("User class should have 'progress' property", () => {
      const testUser = new User();

      expect(Object.hasOwn(testUser, "progress")).toBe(true);
    });

    test("A new instance of User should return a progress of 0", () => {
      const testUser = new User();

      expect(testUser.progress).toBe(0);
    });
  });

  describe("incProgress() method of User class when User rank >= activity rank", () => {
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
    test("should increase User progress by 10 points when User rank is 1 rank lower", () => {
      const testUser = new User();
      testUser.rank = -1;
      testUser.incProgress(1);
      expect(testUser.progress).toBe(10);
    });

    test("should increase User progress by 40 points when User rank is 2 ranks lower", () => {
      const testUser = new User();
      testUser.incProgress(-6);
      expect(testUser.progress).toBe(40);
    });

    test("should increase User progress by 90 points when User rank is 3 ranks lower", () => {
      const testUser = new User();
      testUser.incProgress(-5);
      expect(testUser.progress).toBe(90);
    });

    test("should increase User rank by 1 level when User rank is 4 ranks lower", () => {
      const testUser = new User();
      testUser.incProgress(-4);
      expect(testUser.rank).toBe(-7);
    });

    test("should increase User progress by 60 points when User rank is 4 ranks lower", () => {
      const testUser = new User();
      testUser.incProgress(-4);
      expect(testUser.progress).toBe(60);
    });

    test("should increase User rank by 60 points when User rank is 4 ranks lower and -1", () => {
      const testUser = new User();
      testUser.rank = -1;
      testUser.incProgress(4);
      expect(testUser.progress).toBe(60);
    });

    test("should increase User rank by 1 level when User rank is 4 ranks lower and -1", () => {
      const testUser = new User();
      testUser.rank = -1;
      testUser.incProgress(4);
      expect(testUser.rank).toBe(1);
    });

    test("User rank should not increase above level 8", () => {
      const testUser = new User();
      testUser.rank = 8;
      testUser.progress = 99;
      testUser.incProgress(8);
      expect(testUser.rank).toBe(8);
    });

    test("User progress should not increase above 0 at level 8", () => {
      const testUser = new User();
      testUser.rank = 8;
      testUser.incProgress(8);
      expect(testUser.progress).toBe(0);
    });
  });

  describe("incProgress() error handling and invalid ranges", () => {
    test("should throw an error if incProgress called with a rank of 0", () => {
      const testUser = new User();
      function throwError() {
        testUser.incProgress(0);
      }

      expect(throwError).toThrow(
        new Error(
          "Invalid rank. Activity rank must be a whole integer between -8 and 8, 0 non-inclusive"
        )
      );
    });

    test("should throw an error if incProgress called with a rank above 8", () => {
      const testUser = new User();
      function throwError() {
        testUser.incProgress(9);
      }

      expect(throwError).toThrow(
        new Error(
          "Invalid rank. Activity rank must be a whole integer between -8 and 8, 0 non-inclusive"
        )
      );
    });

    test("should throw an error if incProgress called with a rank below -8", () => {
      const testUser = new User();
      function throwError() {
        testUser.incProgress(-9);
      }

      expect(throwError).toThrow(
        new Error(
          "Invalid rank. Activity rank must be a whole integer between -8 and 8, 0 non-inclusive"
        )
      );
    });

    test("should throw an error if incProgress called with a non-integer", () => {
      const testUser = new User();
      function throwError() {
        testUser.incProgress(5.5);
      }

      expect(throwError).toThrow(
        new Error(
          "Invalid rank. Activity rank must be a whole integer between -8 and 8, 0 non-inclusive"
        )
      );
    });
  });
});
