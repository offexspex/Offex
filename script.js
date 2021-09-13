const day = document.getElementById("days");
const hour = document.getElementById("hours");
const min = document.getElementById("mins");
const sec = document.getElementById("secs");

// const date = window.prompt(
//   "Enter Date in dd/mm/yyyy format and time in hh:mm:ss format followed by space"
// );
date = "15 oct 2021";
const myDate = new Date(date); //using New DATE OBJECT

function timer() {
  const todaysDate = new Date(); //Getting Todays date
  const diff = myDate - todaysDate; //We are getting this in Mili Seconds
  const seconds = Math.floor(diff / 1000); //Total number of seconds left
  const days = Math.floor(seconds / 3600 / 24); //We are getting days left here
  const hours = Math.floor(seconds / 3600) % 24; //Hours left after substracting days
  const mins = Math.floor(seconds / 60) % 60; //Mins left after substracting hours
  const secs = Math.floor(seconds) % 60; //Finally seconds after substracting mins

  day.innerHTML = days;
  hour.innerHTML = hours;
  min.innerHTML = mins;
  sec.innerHTML = secs;

  if (seconds === 0) clearInterval(over);
}

timer();
const over = setInterval(timer, 1000);
