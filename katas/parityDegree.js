// function solution(N) {
//   let x = 0;
//   let highestPower = 0;

//   while (N >= Math.pow(2, x)) {
//     if (N % Math.pow(2, x) === 0) {
//       highestPower = x;
//     }

//     x++;
//   }

//   return highestPower;
// }

function solution(N) {
  let highestPower = 0;
  
  while (N % 2 === 0) {
    N /= 2;
    highestPower++;
  }

  return highestPower;
}

module.exports = solution;
