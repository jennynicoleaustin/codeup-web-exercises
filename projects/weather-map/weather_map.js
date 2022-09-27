"use strict";

// MAPBOX API
mapboxgl.accessToken = MAPBOX_TOKEN;
var map = new mapboxgl.Map({
    container: 'map',
    style:'mapbox://styles/jennynicoleaustin/cl8j9jxha000114o0ipxuncwb',
    zoom: 10,
    center: [-96.8292, 32.9618]
});

// ZOOM CONTROLS ON MAP
map.addControl(new mapboxgl.NavigationControl());


//DRAGGABLE MARKER
const marker = new mapboxgl.Marker({
    color: 'pink',
    draggable: true
})
    .setLngLat([-96.8292, 32.9618])
    .addTo(map);

// AT DRAG END LAT & LNG ARE COLLECTED AND PASSED TO THE GET WEATHERDATA REQUEST
function onDragEnd() {
    const {lng, lat} = marker.getLngLat();
    weatherData(lng, lat)
    console.log(lng, lat);
}
// turn marker "on" at the end of the drag
marker.on('dragend', onDragEnd);


// GET REQUEST TO OPEN WEATHER MAP AND RUN THE DISPLAY FORECAST FUNCTION
const weatherData = async (lng, lat) => {
    try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&cnt=5&units=imperial&appid=${OPEN_WEATHER_APPID}`
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
    dataContainer.setHTML('')
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
} // end display forecast function


// CALL weatherData with lat and lon for Addison, TX
weatherData(-96.8292, 32.9618);

