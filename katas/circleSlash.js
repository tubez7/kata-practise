function circleSlash(n) {
  let even = n % 2 === 0 ? true : false;
  let numbers = [];

  while (n > 0) {
    if (n % 2 === 1) {
      numbers.unshift(n);
    }
    n--;
  }
  console.log(numbers, "numbers array");

  if (!even) {
    console.log("splice block triggered");
    numbers.splice(0, 0, numbers[numbers.length - 1]);
    console.log(numbers, "num post splice");
    numbers.pop();
    console.log(numbers, "num post pop");
    even = !even;
  }

  while (numbers.length > 1) {
    if (!even) {
      console.log("splice block in loop triggered");
      numbers.splice(0, 0, numbers[numbers.length - 1]);
      console.log(numbers, "num post splice");
      numbers.pop();
      console.log(numbers, "num post pop");
    }
    const slashedNumbers = [];
    console.log(numbers, "at start of loop");
    numbers.forEach((num, i) => {
        if (i % 2 === 0) {
            slashedNumbers.push(num);
        }
    });
    console.log(slashedNumbers, "slashed");
    numbers = [...slashedNumbers];
    even = !even;
    console.log(numbers, "re-assigned numbers");
  }

  return numbers[0];
}

module.exports = { circleSlash };
