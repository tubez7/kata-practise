// TODO: create the User class/object
// it must support rank, progress and the incProgress(rank) method

class User {
    constructor(userId = "New User") {
        this.userId = userId;
        this.rank = -8;
        this.progress = 0;
    }
    increaseProgress(rank) {
        if (rank === this.rank) {
            this.progress += 3;
        }
    }
}

module.exports = User;