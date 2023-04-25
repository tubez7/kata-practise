// function firstUnique(A) {
//   for (let i = 0; i < A.length; i++) {
//     const arrayToTest = A.slice(0, i).concat(A.slice(i + 1));

//     if (arrayToTest.indexOf(A[i]) === -1) {
//       return A[i];
//     }
//   }
//   return -1;
// }

function firstUnique(A) {
  const countObj = {};

  A.forEach((num) => {
    if (num in countObj) {
      countObj[num]++;
    } else {
      countObj[num] = 1;
    }
  });

  for (let i = 0; i < A.length; i++) {
    if (countObj[A[i]] === 1) {
      return A[i];
    }
  }
  
  return -1;
}

module.exports = firstUnique;
