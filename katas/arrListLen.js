function solution(A) {
  let nextIndex = A[0];
  let length = 1;

  while (nextIndex !== -1) {
    length++;
    nextIndex = A[nextIndex];
  }

  return length;
}

module.exports = { solution };
