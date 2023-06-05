// function solution(A, B) {
//   let returnStr = "";

//   while (A > 0 || B > 0) {
//     if (A > B) {
//       if (returnStr.slice(-2) === "aa") {
//         returnStr += "b";
//         B--;
//       } else {
//         returnStr += "a";
//         A--;
//       }
//     } else if (B > A) {
//       if (returnStr.slice(-2) === "bb") {
//         returnStr += "a";
//         A--;
//       } else {
//         returnStr += "b";
//         B--;
//       }
//     } else {
//       if (returnStr.slice(-1) === "b") {
//         returnStr += "a";
//         A--;
//       } else {
//         returnStr += "b";
//         B--;
//       }
//     }
//   }

//   return returnStr;
// }

function solution(A, B) {
  let result = "";

  while (A > 0 || B > 0) {
    let currLetter = A > B ? "a" : "b";
    
    if (currLetter === "a" && result.slice(-2) === "aa") {
      currLetter = "b";
    } else if (currLetter === "b" && result.slice(-2) === "bb") {
      currLetter = "a";
    }

    result += currLetter;

    if (currLetter === "a") {
      A--;
    } else {
      B--;
    }
  }

  return result;
}

module.exports = solution;
