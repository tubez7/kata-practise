function solution(A, B) {
  let returnStr = "";

  while (A > 0 || B > 0) {
    if (A > B) {
      if (returnStr.substring(returnStr.length - 2) === "aa") {
        returnStr += "b";
        B--;
      } else {
        returnStr += "a";
        A--;
      }
    } else if (B > A) {
      if (returnStr.substring(returnStr.length - 2) === "bb") {
        returnStr += "a";
        A--;
      } else {
        returnStr += "b";
        B--;
      }
    } else {
      if (returnStr[returnStr.length - 1] === "b") {
        returnStr += "a";
        A--;
      } else {
        returnStr += "b";
        B--;
      }
    }
  }
  
  return returnStr;
}

module.exports = solution;
