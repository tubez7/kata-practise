function humanReadable(seconds) {
  if (!seconds) return "00:00:00";

  let secs = 0;
  let secString = "";
  let mins = "00";
  let hrs = "00";

  while (seconds > 0) {
    if (seconds < 60) {
      secs += seconds;
      secString = secs.toString();
      if (secs < 10) {
        secString = "0" + secString;
      }
      seconds = 0;
    }
  }

  console.log(`${hrs}:${mins}:${secString}`, "return value");

  return `${hrs}:${mins}:${secString}`;
}

module.exports = humanReadable;
