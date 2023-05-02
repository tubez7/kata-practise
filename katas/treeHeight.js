const solution = (T) => {
  if (!T) {
    return -1;
  } else {
    let leftHeight = solution(T.l);
    let rightHeight = solution(T.r);
    const returnValue = Math.max(leftHeight, rightHeight) + 1;
    return returnValue;
  }
};

module.exports = { solution };
