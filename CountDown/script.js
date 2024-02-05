const endDate = "02 Feb 2024 10:00 PM";

document.getElementById("end-date").innerHTML = endDate;
const input = document.querySelectorAll("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = end - now;
  input[0].value = Math.floor(diff / 3600 / 24);

  // convert into day
}

clock();

/**
 * 1 day = 24hr
 * 1hr = 60min
 * 1 min =60sec
 */
