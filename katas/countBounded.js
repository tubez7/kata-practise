// function solution(K, A) { // original recursive solution
//   let count = 0;

//   function counter(arr) {
//     if (arr.length < 1) {
//       return count;
//     } else {
//       for (let p = 0; p < arr.length; p++) {
//         const slicedArr = arr.slice(0, p + 1);

//         if (Math.max(...slicedArr) - Math.min(...slicedArr) <= K) {
//           count++;
//         }
//       }

//       return counter(arr.slice(1));
//     }
//   }

//   return counter(A);
// }



// function solution(K, A) { //attempted solution not using Math global obj
//   const N = A.length;
//   let count = 0;
//   let left = 0;
//   let right = 0;
//   let maxVal = A[0];
//   let minVal = A[0];

//   while (right < N) {    
//     if (maxVal - minVal <= K) {
//       count++;
//       right++;
//     } else {
//       left++;
//       right = left;
//       minVal = A[right];
//       maxVal = A[right];
//     }
    
//     maxVal = maxVal < A[right] ? A[right] : maxVal;
//     minVal = minVal > A[right] ? A[right] : minVal;

//     if (right === N && left < N) {
//       left++;
//       right = left;
//     }
//   }

//   return count > 1000000000 ? 1000000000 : count;
// }

function solution(K, A) {
  const N = A.length;
  let count = 0;
  let left = 0;
  let right = 0;
  let maxVal = A[0];
  let minVal = A[0];

  while (right < N) {
    if (maxVal - minVal <= K) {
      count += right - left + 1;
      right++;
      if (right < N) {
        maxVal = maxVal < A[right] ? A[right] : maxVal;
        minVal = minVal > A[right] ? A[right] : minVal;
      }
    } else {
      if (A[left] === maxVal) {
        maxVal = Math.max(...A.slice(left + 1, right + 1));
      }

      if (A[left] === minVal) {
        minVal = Math.min(...A.slice(left + 1, right + 1));
      }

      left++;
    }
  }

  return count > 1000000000 ? 1000000000 : count;
}

module.exports = solution;
