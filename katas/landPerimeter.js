function landPerimeter(arr) {
  if (arr.length === 0) return 0;

  let perimeter = 0;

  arr.forEach((grid) => {
    console.log("grid: ", grid);
    for (let i = 0; i < grid.length; i++) {
      console.log("grid[i]: ", grid[i]);
      if (grid[i] === "X") {
        perimeter += 4;
      }
    }
  });
  console.log("return value: ", perimeter);
  return perimeter;
}

module.exports = landPerimeter;
