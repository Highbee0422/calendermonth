const monthIndex = new Date().getMonth();
const currentMonth = document.querySelector("h1");
const fullDateEl = document.querySelector("p");
const dateIndex = new Date().toDateString();
const daysEl = document.querySelector(".days");
const lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay() - 1;
const currentDate = new Date().getDate();
const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

currentMonth.innerText = months[monthIndex];

fullDateEl.innerText = dateIndex;

let days = "";

for (let i = firstDay; i > 0; i--) {
  days += `<div class="empty"></div>`;
}

for (let i = 1; i <= lastDay; i++) {
  if (i === currentDate) {
    days += `<div class="today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}
daysEl.innerHTML = days;

console.log(currentDate);
