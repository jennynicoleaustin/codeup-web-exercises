"use strict";

let lat = 0
let lon = 0


// Get 5-day forecast from Open Weather Map
const weatherData = async (lat, lon) => {
    try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&units=imperial&appid=${OPEN_WEATHER_APPID}`
        );
        let fiveDayForecast = res.data.list;
        console.log(fiveDayForecast)
        displayForecast(fiveDayForecast);
        return res.data;
    } catch (e) {
        console.log(`error retrieving data`, e)
    }
};

// GRAB CONTAINER FOR WEATHER DATA TO DISPLAY
const dataContainer = document.querySelector('#weatherData')

// DISPLAY WEATHER DATA

const displayForecast = (fiveDayForecast) => {
    for (let forecast of fiveDayForecast) {
        const {dt_txt, main: {temp, temp_max, temp_min}, weather: [{description, icon}]} = forecast
        const createCard = document.createElement('div')
        createCard.setAttribute("class", "card daily")
        createCard.setHTML(`
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${dt_txt}</h5>
            <p class="card-text">${description}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Current Temp: ${temp}</li>
            <li class="list-group-item">High Temp: ${temp_max}</li>
            <li class="list-group-item">Low Temp: ${temp_min}</li>
        </ul>
    </div>
        `)
        dataContainer.append(createCard)
    }
}

// const displayFiveForecast = async () => {
//     dataContainer.setHTML(``)
//     let fiveDayForecast = await weatherData();
//     for (let daily of fiveDayForecast) {
//         const createCard = document.createElement('div')
//         createCard.setAttribute("class", "card")
//         createCard.setHTML
//         (`<div class="header">${daily.dt_txt}</div>
//         <div class="high">${daily.main.temp_max}</div>
//         <div class="low">${daily.temp_min}</div>
//         `)
//         dataContainer.append(createCard)
//     }
// }

// CALL weatherData with lat and lon for Addison, TX
weatherData(32.9618, 96.8292);

