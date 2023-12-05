function landPerimeter(arr) {
  let perimeter = 0;

  const maxHeight = arr.length - 1;

  arr.forEach((row, y) => {
    const maxLength = row.length - 1; 
    for (let x = 0; x < row.length; x++) {
      if (row[x] === "X") {
        perimeter += x < 1 ? 1 : arr[y][x - 1] === "O";        
        perimeter += x === maxLength ? 1 : arr[y][x + 1] === "O";
        perimeter += y < 1 ? 1 : arr[y - 1][x] === "O";
        perimeter += y === maxHeight ? 1 : arr[y + 1][x] === "O";
      }
    }
  });

  return perimeter;
}

module.exports = landPerimeter;
