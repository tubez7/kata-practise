function longText(text, n) {
  let lengthenedStr = "";
  const regex = /[aeiou]/i;

  for (i = 0; i < text.length; i++) {
    if (regex.test(text[i])) {
      lengthenedStr += text[i].repeat(n);
    } else {
      lengthenedStr += text[i];
    }
  }

  return lengthenedStr;
}

module.exports = longText;
