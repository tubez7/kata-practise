function solution(S) {
  if (S.length === 1) {
    return 0;
  } else if (S.length % 2 === 0) {
    return -1;
  } else {
    const indexToCheck = Math.floor(S.length / 2);
    let count = 1;

    while (count <= indexToCheck) {
      if (S[indexToCheck - count] !== S[indexToCheck + count]) {
        return -1;
      }

      count++;
    }

    return indexToCheck;
  }
}

module.exports = solution;
