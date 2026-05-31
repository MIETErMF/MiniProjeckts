const cityButton = document.getElementById('searchButton');
const cityInput = document.getElementById('city');
const result = document.getElementById('result');
cityButton.addEventListener('click', async () => {
    const city = cityInput.value;
    if (city === "") {
        alert("type your city");
        return;
    }
    const coordinates = await getCoordinates(city);

    const weather = await getWeather(coordinates);
})

async function getCoordinates(city) {
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en`);
    const responseObject = await response.json();
    const results = responseObject.results[0];
    console.log(results);
    return [results.latitude, results.longitude, results.country];
}

async function getWeather(coordinates) {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coordinates[0]}&longitude=${coordinates[1]}&current=temperature_2m,relative_humidity_2m,weather_code`);
    const weather = await response.json();
    const weatherCode = getDescription(weather.current.weather_code)
    result.innerText = coordinates[2] +  '\b\r' + "Temperature:" + " " + weather.current.temperature_2m + "C" + "\b\r" + "Humidity:" + " " + weather.current.relative_humidity_2m + "%" + "\b\r" + "Weather type:" + " " + weatherCode;
    return [weather.current.temperature_2m, weather.current.relative_humidity_2m, weather.current.weather_code];
}

function getDescription(code) {
    if (code === 0) return "Clear ☀️";
    if (code <= 2) return "Mostly clear 🌤️";
    if (code === 3) return "Cloudy ☁️";
    if (code <= 49) return "Fog 🌫️";
    if (code <= 59) return "Drizzle 🌦️";
    if (code <= 69) return "Rain 🌧️";
    if (code <= 79) return "Snow ❄️";
    if (code <= 84) return "Showers 🌨️";
    if (code <= 94) return "Thunderstorm ⛈️";
    return "Storm 🌩️";
}