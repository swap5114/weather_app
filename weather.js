const api_key = "15e1b98d77ebafb33365cbed8a5ac244";

const city = " ";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
        .then((response) => response.json())
        .then((data) => {
            if (data.cod === "404") {
                alert("City not found!");
                return;
            }
            console.log(`Temprature ${data.main.temp}`)
            console.log(`condition ${data.weather[0].description}`)
            console.log(`Humidity ${data.main.humidity}`)

        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            alert("Something went wrong. Try again later.");
        });