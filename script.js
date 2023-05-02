var day = "";
var month = "";
var year = "";

function updateDay() {
  day = Number(document.getElementById("input-day").value);
  let dayError = document.getElementById("day-error");
  let dayInput = document.getElementById("input-day");
  let dayLabel = document.getElementById("label-day");

  if (day == "") {
    dayError.style.display = "block";
    dayError.textContent = "This field is required";
    dayInput.style.border = "1px solid hsl(0, 100%, 67%)";
    dayLabel.style.color = "hsl(0, 100%, 67%)";
  } else if (isNaN(day) || 0 > day || day > 31) {
    dayError.style.display = "block";
    dayError.textContent = "Must be a valid day";
    dayInput.style.border = "1px solid hsl(0, 100%, 67%)";
    dayLabel.style.color = "hsl(0, 100%, 67%)";
  } else {
    dayError.style.display = "none";
    dayInput.style.border = "1px solid hsl(0, 0%, 86%)";
    dayLabel.style.color = "hsl(0, 1%, 44%)";
  }
}
function updateMonth() {
  month = Number(document.getElementById("input-month").value);
  let monthError = document.getElementById("month-error");
  let monthInput = document.getElementById("input-month");
  let monthLabel = document.getElementById("label-month");

  if (month == "") {
    monthError.style.display = "block";
    monthError.textContent = "This field is required";
    monthInput.style.border = "1px solid hsl(0, 100%, 67%)";
    monthLabel.style.color = "hsl(0, 100%, 67%)";
  } else if (isNaN(month) || 0 > month || month > 12) {
    monthError.style.display = "block";
    monthError.textContent = "Must be a valid month";
    monthInput.style.border = "1px solid hsl(0, 100%, 67%)";
    monthLabel.style.color = "hsl(0, 100%, 67%)";
  } else {
    monthError.style.display = "none";
    monthInput.style.border = "1px solid hsl(0, 0%, 86%)";
    monthLabel.style.color = "hsl(0, 1%, 44%)";
  }
}
function updateYear() {
  year = Number(document.getElementById("input-year").value);
  let yearError = document.getElementById("year-error");
  let yearInput = document.getElementById("input-year");
  let yearLabel = document.getElementById("label-year");

  if (year == "") {
    yearError.style.display = "block";
    yearError.textContent = "This field is required";
    yearInput.style.border = "1px solid hsl(0, 100%, 67%)";
    yearLabel.style.color = "hsl(0, 100%, 67%)";
  } else if (
    isNaN(year) ||
    new Date().getFullYear() < year ||
    String(year).length != 4
  ) {
    yearError.style.display = "block";
    yearError.textContent = "Must be a in the past";
    yearInput.style.border = "1px solid hsl(0, 100%, 67%)";
    yearLabel.style.color = "hsl(0, 100%, 67%)";
  } else {
    yearError.style.display = "none";
    yearInput.style.border = "1px solid hsl(0, 0%, 86%)";
    yearLabel.style.color = "hsl(0, 1%, 44%)";
  }
}

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageCalculate() {
  day = Number(document.getElementById("input-day").value);
  month = Number(document.getElementById("input-month").value);
  year = Number(document.getElementById("input-year").value);
  let today = new Date();

  console.log(`${day}/${month}/${year}`);
  let inputDate = new Date(year, month, day);
  let birthMonth, birthDate, birthYear;
  let birthDetails = {
    date: inputDate.getDate(),
    month: inputDate.getMonth() + 1,
    year: inputDate.getFullYear(),
  };
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth() + 1;
  let currentDate = today.getDate();


  leapChecker(currentYear);

  if (
    birthDetails.year > currentYear ||
    (birthDetails.month > currentMonth && birthDetails.year == currentYear) ||
    (birthDetails.date > currentDate &&
      birthDetails.month == currentMonth &&
      birthDetails.year == currentYear)
  ) {
    alert("Not Born Yet");
    displayResult("- -", "- -", "- -");
    return;
  }

  birthYear = currentYear - birthDetails.year;
  console.log(birthYear)
  if (currentMonth >= birthDetails.month) {
    birthMonth = currentMonth - birthDetails.month;
  } else {
    birthYear--;
    birthMonth = 12 + (currentMonth - birthDetails.month);
  }

  if (currentDate >= birthDetails.date) {
    birthDate = currentDate - birthDetails.date;
  } else {
    let days = months[currentMonth - 1];
    birthDate = days + currentDate - birthDetails.date;
    if (birthMonth < 0) {
      birthMonth = 11;
      birthYear--;
    }
  }
  displayResult(birthDate, birthMonth, birthYear);
}

function displayResult(bDate, bMonth, bYear) {
  document.getElementById("years-output").textContent = bYear;
  document.getElementById("months-output").textContent = bMonth;
  document.getElementById("days-output").textContent = bDate;
}

function leapChecker(year) {
  if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
    months[1] = 29;
  } else {
    months[1] = 28;
  }
}
