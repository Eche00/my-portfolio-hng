// toggling dark and light mode
function changeMode() {
  document.body.classList.toggle("darkmode");
}

// getting current time
const utcTime = document.getElementById("current-time");
setInterval(() => {
  const currentTime = new Date().toUTCString();
  const timeSplit = currentTime.split(" ");
  const time = timeSplit[4];
  utcTime.innerHTML = time;
}, 1000);

// getting current day
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function updateDay() {
  const currentDay = days[new Date().getDay()];
  const exactDay = document.getElementById("current-day");
  exactDay.innerHTML = currentDay;
}
setInterval(updateDay, 86400000);
updateDay();
