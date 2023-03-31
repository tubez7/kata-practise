function topThreeWords(str) {
  if (!str) return [];

  const frequentWords = [];

  const lowerCaseStr = str.toLowerCase();
  const regex = /[^a-z']/i;
  const words = lowerCaseStr.split(regex);

  console.log(words, "words array");

  const filteredWords = words.filter((word) => word !== "");

  console.log(filteredWords, "filtered words");

  const refObject = {};

  filteredWords.forEach((word) => {
    if (!refObject[word]) {
      refObject[word] = 1;
    } else {
      refObject[word]++;
    }
  });

  console.log(refObject);

  const occurrences = [];

  for (x in refObject) {
    occurrences.push(refObject[x]);
    occurrences.sort((a, b) => b - a);
    occurrences.splice(3);
    if (occurrences.includes(refObject[x])) {
      frequentWords.push(x);
    }
  }

  console.log(occurrences, "occurrences");
  console.log(frequentWords, "return array");

  return frequentWords;
}

module.exports = topThreeWords;
