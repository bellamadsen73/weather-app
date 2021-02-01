let now = new Date();
let h2 = document.querySelector("h2");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`
}
h2.innerHTML = `${day} ${hour}:${minutes}`;

function displayWeather(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("h3").innerHTML = `${Math.round(
    response.data.main.temp
)}°C | °F`;
}

function searchLocation(position) {
  let apiKey = "11a6bd137d38c9eff9b66fb017459c47";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${
    position.coords.latitude
  }&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function searchCity(city) {
  let apiKey = "11a6bd137d38c9eff9b66fb017459c47";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-form").value;
  let searchInput = document.querySelector("#search-form");
  let h1 = document.querySelector("h1");
  h1.innerHTML = searchInput.value;
  searchCity(city);
  
}

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

let currentLocation = document.querySelector("button");
currentLocation.addEventListener("click", getCurrentLocation);

searchCity("Aarhus");