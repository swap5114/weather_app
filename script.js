// Get DOM elements
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");

// Your OpenWeather API key
const api_key = "15e1b98d77ebafb33365cbed8a5ac244";

// Event listener for button click
searchBtn.addEventListener("click", function () {
    const city = cityInput.value.trim();

    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    // Fetch weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
        .then((response) => response.json())
        .then((data) => {
            if (data.cod === "404") {
                alert("City not found!");
                return;
            }

            // Update HTML with weather data
            cityName.innerText = data.name;
            temperature.innerText = `Temperature: ${data.main.temp} °C`;
            description.innerText = `Condition: ${data.weather[0].description}`;
            humidity.innerText = `Humidity: ${data.main.humidity} %`;
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            alert("Something went wrong. Try again later.");
        });
});
