const solution = (E, L) => {
  const entryArr = E.split(":");
  const leaveArr = L.split(":");

  const minsEnter = parseInt(entryArr[0] * 60) + parseInt(entryArr[1]);
  const minsOut = parseInt(leaveArr[0] * 60) + parseInt(leaveArr[1]);

  const minsToPay = minsOut - minsEnter - 60;
  const fee = 4 * Math.ceil(minsToPay / 60) + 5;

  return fee;
};

module.exports = solution;
