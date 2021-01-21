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
h2.innerHTML = `${day} ${hour}:${minutes}`;

function displayWeather(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("h3").innerHTML = `${Math.round(
    response.data.main.temp
  )}°C`;
}

function search(event) {
  event.preventDefault();
  let apiKey = "11a6bd137d38c9eff9b66fb017459c47";
  let city = document.querySelector("#search-form").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);

  let searchInput = document.querySelector("#search-form");
  let h1 = document.querySelector("h1");
  h1.innerHTML = searchInput.value;
}
let form = document.querySelector("form");
form.addEventListener("submit", search);
