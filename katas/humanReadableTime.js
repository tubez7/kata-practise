function humanReadable(seconds) {

  let secs = 0;
  let secString = "00";
  let mins = 0;
  let minString = "00";
  let hrs = 0;
  let hrString = "00";

  while (seconds > 0) {
    if (seconds < 60) {
      secs += seconds;
      secString = secs.toString();
      if (secs < 10) {
        secString = "0" + secString;
      }
      seconds = 0;
    } else if (seconds < 3600) {
      mins += Math.floor(seconds / 60);
      minString = mins.toString();
      if (mins < 10) {
        minString = "0" + minString;
      }
      seconds -= 60 * mins;
    } else if (seconds > 3599) {
      hrs += Math.floor(seconds / 3600);
      hrString = hrs.toString();
      if (hrs < 10) {
        hrString = "0" + hrString;
      }
      seconds -= 3600 * hrs;
    }
  }

  return `${hrString}:${minString}:${secString}`;
}

module.exports = humanReadable;
