"use strict";

let lat = 0
let lon = 0

const weatherData = async (lat, lon) => {
    try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&units=imperial&appid=${OPEN_WEATHER_APPID}`
        );
        let fiveDayForecast = res.data.list;
        console.log(fiveDayForecast)
        return res.data;
    } catch (e) {
        console.log(`error retrieving data`, e)
    }
};

const dataContainer = document.querySelector('#weatherData')

const displayFiveForecast = async () => {
    dataContainer.setHTML(``)
    let fiveDayForecast= await weatherData();
    for (let daily of fiveDayForecast) {
        const createCard = document.createElement('div')
        createCard.setAttribute("class", "card")
        createCard.setHTML
        (`<div class="header">${daily.dt_txt}</div>
        <div class="high">${daily.main.temp_max}</div>
        <div class="low">${daily.temp_min}</div>
        `)
        dataContainer.append(createCard)
    }
}
weatherData(32.9618, 96.8292);

