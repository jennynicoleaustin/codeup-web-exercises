//don't use their geolocator, instead take input from search t change location of my original marker
//hourly vs daily = use hourly to give daily forecast
// geolocator function on map
const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    draggable: true
});
function onGeoDragEnd() {
    const {lng, lat} = geocoder.getLngLat();
    weatherData(lng, lat)
    console.log(lng, lat);
}
geocoder.on('dragend', onDragEnd);


document.getElementById('geocoder').appendChild(geocoder.onAdd(map));