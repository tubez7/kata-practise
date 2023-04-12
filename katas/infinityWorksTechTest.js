function maxPath(X, Y) {
  const sortedX = [...X].sort((a, b) => a - b);

  let maxWidth = 0;

  for (let i = 0; i < sortedX.length - 1; i++) {
    const width = sortedX[i + 1] - sortedX[i];

    if (width > maxWidth) {
      maxWidth = width;
    }
  }

  return maxWidth;
}

module.exports = maxPath;
