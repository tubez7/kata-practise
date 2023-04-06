function circleSlash(n) {
  const even = n % 2 === 0 ? true : false;
  let numbers = [];

  while (n > 0) {
    if (n % 2 === 1) {
      numbers.push(n);
    }
    n--;
  }
  console.log(numbers, "numbers array");
  numbers.reverse();

  while (numbers.length > 1) {
    const slashedNumbers = [];
    console.log(numbers, "num post rev");
    if (!even) {
      numbers.splice(0, 0, numbers[numbers.length - 1]);
    }
    console.log(numbers, "num post splice");
    numbers.pop();
    console.log(numbers, "num post pop");
    numbers.forEach((num, i) => {
      if (i % 2 === 0) {
        slashedNumbers.push(num);
      }
    });
    console.log(slashedNumbers, "slashed");
    numbers = [...slashedNumbers];
    console.log(numbers, "re-assigned numbers");
  }

  return numbers[0];
}

module.exports = { circleSlash };


