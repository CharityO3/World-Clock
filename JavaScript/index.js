
function updateTime(){
  
  let losAngelesElement = document.querySelector("#los-angeles");
  let poznanElement = document.querySelector("#poznan");

  if (losAngelesElement && poznanElement){
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime= moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("hh:mm:ss [<small>]A[</small>]");

    let poznanDateElement = poznanElement.querySelector(".date");
    let poznanTimeElement = poznanElement.querySelector(".time");
    let poznanTime = moment().tz("Europe/Warsaw");

    poznanDateElement.innerHTML = poznanTime.format("MMMM Do YYYY");
    poznanTimeElement.innerHTML = poznanTime.format("hh:mm:ss [<small>]A[</small>]");
  }
};


let citiesSelect = document.querySelector("#select-city");
let intervalId;
citiesSelect.addEventListener("change", (event) => {
  intervalId = setInterval(() => {
    let cityTimeZone = event.target.value;
  
    if (cityTimeZone === "current"){
      cityTimeZone = moment.tz.guess();
    }
  
    let cityTime = moment().tz(cityTimeZone);
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("hh:mm:ss")} <small>${cityTime.format("A")}</small></div>
    </div>
    <a href="/" class ="return-back">Back to all cities...</a>`;
  
    
  }, 1000);
});

updateTime();
setInterval(updateTime, 1000);
