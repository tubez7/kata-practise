// function rot13(str) {
//   if (str.length < 1) return str;

//   const strCodes = [];

//   for (let i = 0; i < str.length; i++) {
//     strCodes.push(str.charCodeAt(i));
//   }

//   const aToMCodes = [];
//   const nToZCodes = [];
//   let counter = 13;
//   let capA = 65;
//   let lowerA = 97;
//   let capN = 78;
//   let lowerN = 110;

//   while (counter > 0) {
//     aToMCodes.push(capA, lowerA);
//     nToZCodes.push(capN, lowerN);
//     capA++;
//     lowerA++;
//     capN++;
//     lowerN++;
//     counter--;
//   }

//   const rotCodes = strCodes.map((code) => {
//     if (aToMCodes.includes(code)) {
//       return code + 13;
//     } else if (nToZCodes.includes(code)) {
//       return code - 13;
//     } else {
//       return code;
//     }
//   });

//   return rotCodes.map((code) => String.fromCharCode(code)).join("");

// }

function rot13(str) {
  const regex = /[a-z]/ig;

  return str.replace(regex, (matchedLetter) => {
    return String.fromCharCode(
      matchedLetter.charCodeAt(0) +
        (matchedLetter.toLowerCase().charCodeAt(0) < 110 ? 13 : -13)
    );
  });
}

module.exports = rot13;
