function solution(A) {
  let q = A.length - 1;
  let p = 0;
  let count = 0;

  while (q > 0) {
    while (p < q) {
      if (A[q] < A[p]) {
        count++;
      }

      p++;
    }

    q--;
    p = 0;
  }

  return count;
}

module.exports = solution;
