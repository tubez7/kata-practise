function circleSlash(n) {
  const even = n % 2 === 0 ? true : false;
  const numbers = [];

  while (n > 0) {
    if (n % 2 === 1) {
      numbers.push(n);
    }
    n--;
  }
  console.log(numbers, "numbers array");

  if (numbers.length > 1) {
    if (even) {
      numbers.shift();
    } else {
      numbers.pop();
    }
  }

  return numbers[0];
}

module.exports = { circleSlash };
