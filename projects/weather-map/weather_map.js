"use strict";

// GRAB CONTAINER FOR WEATHER DATA TO DISPLAY
const dataContainer = document.querySelector('#weatherData')
// //GRAB SEARCH INPUT
// const search = document.querySelector('#search').value

// GET REQUEST TO OPEN WEATHER MAP AND RUN THE DISPLAY FORECAST FUNCTION
const weatherData = async (lng, lat) => {
    try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&cnt=20&units=imperial&appid=${OPEN_WEATHER_APPID}`
        );
        let fiveDayForecast = res.data.list; // data is stored in variable
        console.log(fiveDayForecast)
        displayForecast(fiveDayForecast);
        return res.data;
    } catch (e) {
        console.log(`error retrieving data`, e)
    }
};

// MAPBOX MAP and MARKER
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

// if I want no marker to be present until the search function is complete I should set the search to run a function that passes .setLngLat and .addTo
//     .setLngLat([-96.8292, 32.9618]) // sets the initial location of the draggable marker to addison
//     .addTo(map); // adds that marker to the map

// SET MARKER FUNCTION
async function setMarker (lng, lat) {
    marker.setLngLat({lng: lng, lat: lat});
    marker.addTo(map);
}
setMarker(-96.8292,32.9618)

// AT DRAG END LAT & LNG ARE COLLECTED AND PASSED TO THE GET WEATHERDATA REQUEST
function onDragEnd() {
    const {lng, lat} = marker.getLngLat();
    weatherData(lng, lat)
    console.log(lng, lat);
}

// turn marker "on" at the end of the drag
marker.on('dragend', onDragEnd);




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

const geocoderHTML = document.querySelector('#geocoder')

const geocoder =
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    });

geocoderHTML.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        let lat = geocoder.mapMarker._lngLat.lat;
        let lng = geocoder.mapMarker._lngLat.lng;
        weatherData(lng, lat);
    }
})

geocoderHTML.append(geocoder.onAdd(map))

// CALL weatherData with lat and lon for Addison, TX
weatherData(-96.8292, 32.9618);

const geocoderMarker = document.querySelectorAll("mapboxgl-marker");
geocoderMarker.on('dragend', onDragEnd); // this does not work, we want it to turn on the dragend feature for this not yet on the page marker.

// Also need to adjust the forecast to display the 5 days in 5 blocks

