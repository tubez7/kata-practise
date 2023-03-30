function topThreeWords(str) {
    if (!str) return []; 

    // const frequentWords = [];

    const lowerCaseStr = str.toLowerCase();
    const regex = /[^a-z']/i;
    const words = lowerCaseStr.split(regex);

    return words;
}

module.exports = topThreeWords;