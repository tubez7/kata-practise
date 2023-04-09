function circleSlash(n) {
  let even = n % 2 === 0 ? true : false;
  let numbers = [];

  while (n > 0) {
    if (n % 2 === 1) {
      numbers.unshift(n);
    }
    n--;
  }

  while (numbers.length > 1) {
    if (!even) {
      numbers.splice(0, 0, numbers[numbers.length - 1]);
      numbers.pop();
    }

    const slashedNumbers = [];

    even = numbers.length % 2 === 0 ? true : false;
    
    numbers.forEach((num, i) => {
      if (i % 2 === 0) {
        slashedNumbers.push(num);
      }
    });

    numbers = [...slashedNumbers];
  }

  return numbers[0];
}

module.exports = { circleSlash };
