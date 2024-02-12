// TODO: create the User class/object
// it must support rank, progress and the incProgress(rank) method

class User {
  constructor(userId = "New User") {
    this.userId = userId;
    this.rank = -8;
    this.progress = 0;
  }
  incProgress(rank) {
    // function increaseRank() {
    //   this.rank += Math.floor(this.progress / 100); +1 if 0. If >= 8 = 8;
    //   this.progress = this.progress % 100; 0 if rank = 8 - ternary operator;
    // }

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

    // if (this.progress >= 100) {
    //     increaseRank();
    //  }
  }
}

module.exports = User;
