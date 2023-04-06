// 1 - ORIGINAL SOLUTION

// function topThreeWords(str) {
//   if (!str) return [];

//   const returnArray = [];
  
//   const regex = /[^a-z']/i;
//   const filteredWords = str.toLowerCase().split(regex).filter((word) => word !== "" && word !== "'"); //removes empty strings from the array.
  
//   const refObject = {};
  
//   filteredWords.forEach((word) => {
//     if (!refObject[word]) {
//         refObject[word] = 1;
//     } else {
//         refObject[word]++;
//     }
// });

// const occurrences = [];

// for (x in refObject) {
//     occurrences.push(refObject[x]);
// }
// occurrences.sort((a, b) => b - a);
// occurrences.splice(3);

// const frequentWords = [];

//   for (x in refObject) {
//     if (occurrences.includes(refObject[x])) {
//       if (frequentWords.length < 3) {
//         // only pushes the 3 most frequent words in the order they appear in the input string
//         frequentWords.push(x);
//       }
//     }
//   }

//   let i = 0;
//   let j = 0;

//   while (i < frequentWords.length) {
//     while (j < frequentWords.length) {
//       let wordToCheck = frequentWords[j];
//       if (refObject[wordToCheck] === occurrences[i]) {
//         returnArray[i] = wordToCheck;
//         i++;
//       }
//       j++;
//     }
//     j = 0;
//   }

//   return returnArray;
// }

// 2 - REFACTORED SOLUTION FOR INCREASED EFFICIENCY

function topThreeWords(str) {
  if (!str) return [];

  const regex = /[^a-z']/i;
  const filteredWords = str.toLowerCase().split(regex).filter((word) => word !== "" && word !== "'");

  const refObject = filteredWords.reduce((acc, word) => {
    acc[word] = acc[word] ? acc[word] + 1 : 1;
    return acc;
  }, {});

  const frequentWords = Object.entries(refObject)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([word]) => word);
  
    return frequentWords;
}

module.exports = topThreeWords;

