function circleSlash(n) {
  const numbers = [];

  while (n > 0) {
    if (n % 2 === 1) {
      numbers.push(n);
    }
    n--;
  }
  return numbers[0];
}

module.exports = { circleSlash };
