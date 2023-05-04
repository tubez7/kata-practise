function solution(A, B) {
  let returnStr = "";

  while (B >= 2 * A && A > 0) {
    returnStr += "bb";
    returnStr += "a";
    B -= 2;
    A--;
  }

  while (A >= 2 * B && B > 0) {
    returnStr += "aa";
    returnStr += "b";
    A -= 2;
    B--;
  }

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
