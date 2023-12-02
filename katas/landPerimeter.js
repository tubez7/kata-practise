// function landPerimeter(arr) {
//   if (arr.length === 0) return 0;

//   const checkedSquares = [];

//   let perimeter = 0;

//   arr.forEach((square, y) => {
//     console.log("square: ", square);
//     for (let x = 0; x < square.length; x++) {
//       console.log("square[x]: ", square[x]);
//       if (square[x] === "X") {
//         perimeter += 4;
//       }
//     }
//   });
//   console.log("return value: ", perimeter);
//   return perimeter;
// }

function landPerimeter(arr) {
  if (arr.length === 0) return 0;

  const checkedSquares = [];

  let perimeter = 0;

  arr.forEach((square, y) => {
    for (let x = 0; x < square.length; x++) {
      if (square[x] === "X") {
        if (!checkedSquares.includes(`${x}${y}`)) {
          perimeter += 4;
          checkedSquares.push(`${x}${y}`);
          console.log("Initial +ve. checkedSqrs =  ", checkedSquares);

          let index = 1;
          while (x + index < square.length) {
            if (square[x + index] === "X") {
              if (!checkedSquares.includes(`${x + index}${y}`)) {
                perimeter += 2;
                checkedSquares.push(`${x + index}${y}`);
                console.log("Seq checkedSqrs =  ", checkedSquares);
                index++;
              }
            } else {
              break;
            }
          }
        }
      }
    }
  });
  console.log("return value: ", perimeter);
  return perimeter;
}

module.exports = landPerimeter;
