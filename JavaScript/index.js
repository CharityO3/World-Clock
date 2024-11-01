
function updateCityTime(){

  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime= moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format("hh:mm:ss [<small>]A[</small>]");

  let poznanElement = document.querySelector("#poznan");
  let poznanDateElement = poznanElement.querySelector(".date");
  let poznanTimeElement = poznanElement.querySelector(".time");
  let poznanTime = moment().tz("Europe/Warsaw");

  poznanDateElement.innerHTML = poznanTime.format("MMMM Do YYYY");
  poznanTimeElement.innerHTML = poznanTime.format("hh:mm:ss [<small>]A[</small>]");
};

updateCityTime();
setInterval(updateCityTime, 1000);