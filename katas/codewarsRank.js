// TODO: create the User class/object
// it must support rank, progress and the incProgress(rank) method

class User {
  constructor(userId = "New User") {
    this.userId = userId;
    this.rank = -8;
    this.progress = 0;
  }
  incProgress(rank) {
    if (rank === 0 || rank > 8 || rank < -8 || !Number.isInteger(rank)) {
      throw new Error("Invalid rank. Activity rank must be a whole integer between -8 and 8, 0 non-inclusive");
    }

    const increaseRank = () => {
      this.rank += Math.floor(this.progress / 100);
      this.rank = this.rank === 0 ? 1 : this.rank;
      this.rank = this.rank > 8 ? 8 : this.rank;
      this.progress = this.progress % 100;
    };

    let differenceCorrection = 0;

    if ((this.rank < 0 && rank > 0) || (this.rank > 0 && rank < 0)) {
      differenceCorrection = 1;
    }

    if (rank === this.rank) {
      this.progress += 3;
    } else if (this.rank > rank) {
      if (Math.abs(this.rank - rank) - differenceCorrection === 1) {
        this.progress += 1;
      }
    } else {
      const difference = Math.abs(rank - this.rank) - differenceCorrection;
      this.progress += 10 * difference * difference;
    }

    if (this.progress >= 100) {
      increaseRank();
    }

    this.progress = this.rank === 8 ? 0 : this.progress;
  }
}

module.exports = User;
