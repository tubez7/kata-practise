function topThreeWords(str) {
  if (!str) return [];

  const frequentWords = [];
  const returnArray = [];

  const lowerCaseStr = str.toLowerCase();
  const regex = /[^a-z']/i;
  const words = lowerCaseStr.split(regex); // fails the bonus points

  //   console.log(words, "words array");

  const filteredWords = words.filter((word) => word !== ""); //removes empty strings from the array.

  //   console.log(filteredWords, "filtered words");

  const refObject = {};

  filteredWords.forEach((word) => {
    if (!refObject[word]) {
      refObject[word] = 1;
    } else {
      refObject[word]++;
    }
  });

  //   console.log(refObject, "refObj");

  const occurrences = [];

  for (x in refObject) {
    occurrences.push(refObject[x]);
  }
  occurrences.sort((a, b) => b - a);
  occurrences.splice(3);

  for (x in refObject) {
    if (occurrences.includes(refObject[x])) {
      if (frequentWords.length < 3) {
        // only pushes the 3 most frequent words in the order they appear in the input string
        frequentWords.push(x);
      }
    }
  }
  console.log(occurrences, "occurrences");
  // console.log(frequentWords, "frq words array");

  let i = 0;
  let j = 0;

  while (i < frequentWords.length) {
    while (j < frequentWords.length) {
      let wordToCheck = frequentWords[j];
      if (refObject[wordToCheck] === occurrences[i]) {
        returnArray[i] = wordToCheck;
        i++;
      }
      j++;
    }
    j = 0;
  }

  console.log(returnArray, "return v");

  return returnArray;
}

module.exports = topThreeWords;
