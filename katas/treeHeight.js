// const solution = (T, count = 0) => {
//   //   let count = count || 0;

//   if (typeof T.l === "object" || typeof T.r === "object") {
//     count++;
//     if (typeof T.l === "object") {
//       console.log("triggered T.l", count);
//       solution(T.l, count);
//     }

//     if (typeof T.r === "object") {
//       console.log("triggered T.r", count);
//       solution(T.r, count);
//     }
//   } else {
//     return count;
//   }
// };

function solution(T) {
  if (!T) {
    return -1;
  } else {
    let leftHeight = solution(T.l);
    let rightHeight = solution(T.r);
    const returnValue = Math.max(leftHeight, rightHeight) + 1;
    return returnValue;
  }
}

module.exports = { solution };
