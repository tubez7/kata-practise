// function solution(K, A) {
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
//   console.log(myMap, "my map");

//   return counter(A);
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
      console.log(count, "count b4 increase");
      count += right - left + 1;
      console.log(count, " count after slice checked", left, right, maxVal, minVal);
      right++;
      
      if (right < N) {
        maxVal = Math.max(maxVal, A[right]);
        minVal = Math.min(minVal, A[right]);
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

// function solution(K, A) {
//     const N = A.length;
//     let count = 0;
//     let left = 0;
//     let right = 0;
//     let maxVal = A[0];
//     let minVal = A[0];
  
//     while (right < N) {
//       if (maxVal - minVal <= K) {

//         count += right - left + 1;
//         // console.log(count, " count after slice checked", left, right, maxVal, minVal);
//         right++;
//         if (right < N) {
//           maxVal = Math.max(maxVal, A[right]);
//           minVal = Math.min(minVal, A[right]);
//         }
//       } else {
//         if (A[left] === maxVal) {
//           maxVal = Math.max(...A.slice(left + 1, right + 1));
//         }
//         if (A[left] === minVal) {
//           minVal = Math.min(...A.slice(left + 1, right + 1));
//         }
//         left++;
//       }
//     }
  
//     return count > 1000000000 ? 1000000000 : count;
// }

module.exports = solution;
