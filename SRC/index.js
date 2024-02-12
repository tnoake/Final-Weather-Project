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

getForecast(response.data.city);
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


function displayForecast() {
    let forecastElement = document.querySelector("#forecast");

    let days = ["Tue", "Wed", "Thur", "Fri", "Sat"];
    let forecastHtml = ""

    
    days.forEach(function (day) {
    forecastHtml = forecastHtml + `
    <div class="weather-forecast-day">${day}</div>
                <div><img class="weather-icon"
                        src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/sun.png"
                        width="36" /></div>
                <div class="weather-forecast-temperature">
                    <span class="weather-forecast-maximum">18º</span>
                    <span class="weather-forecast-minimum">12º</span>
                </div>
                `;
});
forecastElement.innerHTML = forecastHtml;
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    let cityElement = document.querySelector("#weather-app-city");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value)
}

function getForecast(city) {
    let apiKey = "6073b08ba5624acaad3a42eof1at9c53"
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`
    acious(apiUrl).then(displayForecast)};
        



let searchFormElement = document.querySelector("#search-form");

searchFormElement.addEventListener("submit", handleSearchSubmit)

displayForecast();


   
