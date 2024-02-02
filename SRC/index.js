function refreshWeather(response) {
    let temperatureElement = document.querySelector("#current-temperature");
    let temperature = response.data.temperature.current;
temperatureElement.innerHTML = Math.round(temperature);
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windSpeedElement = document.querySelector("#wind-speed");
let timeElement = document.querySelector("#time");
let date = new Date(response.data.time * 1000);

timeElement.innerHTML = formatDate(date);

descriptionElement.innerHTML = response.data.condition.description;
humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
}

function formatDate(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let day = days[date.getDay()];

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return `${day} ${hours}:${minutes}`;
}



function searchCity(city) {
let apiKey = "b58a2f047af526to478d86be21c3e75d";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(refreshWeather);
}




function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    let cityElement = document.querySelector("#weather-app-city");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value)
}

let searchFormElement = document.querySelector("#search-form");

searchFormElement.addEventListener("submit", handleSearchSubmit)



