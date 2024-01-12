let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
  let currentTIme = new Date();

  hrs.innerHTML = currentTIme.getHours();
  min.innerHTML = currentTIme.getMinutes();
  sec.innerHTML = currentTIme.getSeconds();
}, 1000);
