const $weather = document.getElementById("weather");
const $weatherImg = $weather.querySelector("img");
const $weatherTemp = $weather.querySelector("div:last-child");
const $location = document.getElementById("location");

function onGeoOK(posiion) {
  const API_KEY = "fe68768f3eb61f0ff15cfc4a1def92da";
  const lat = posiion.coords.latitude;
  const lon = posiion.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      $weatherImg.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      $weatherTemp.innerText = data.main.temp.toFixed(1);
      $location.innerText = data.name;
      // city.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find your location.");
}

var options = {
  enableHighAccruacy: true,
};

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError, options);
