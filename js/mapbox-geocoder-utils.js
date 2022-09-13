"use strict";

//Map populates

mapboxgl.accessToken = MAPBOX_TOKEN;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/jennynicoleaustin/cl80mc1cg002x15qjj5xv6tr7', // style URL
    center: [-77.88, 34.21], // starting position [lng, lat]
    zoom: 9, // starting zoom
    projection: 'globe'

});
//Working through lesson and first 7 problems
// //Create the popup
// let circaPop = new mapboxgl.Popup({offset: 25}).setHTML('<p>Delicious Tapas and new menus daily</p>');
//
//
// //add a marker
// const circa = new mapboxgl.Marker()
//     .setLngLat([-77.948570, 34.235695])
//     .setPopup(circaPop)
//     .addTo(map);
//
// // run geocode to get lnglat from API for circa, recenter on circa, and focus
// geocode("8 N Front St, Wilmington, NC 28401", MAPBOX_TOKEN).then(function(result) {
//     console.log(result);
//     map.setCenter(result);
//     map.setZoom(20);
// });

// let restaurants = [
//     {
//         name: `Circa 1922`,
//         address: `8 N Front Street, Wilmington, North Carolina 28401, United States`,
//         coordinates: [-77.948570,34.235695],
//         cuisine: `Tapas`,
//     },
//     {
//         name:`Catch`,
//         address: `6623 Market Street, Wilmington, North Carolina 28405, United States`,
//         coordinates: [-77.838730, 34.257920],
//         cuisine:`Fried Chicken / Nashville Hot Chicken`,
//     },
//     {
//         name: `Fork'n Cork`,
//         address: `122 Market Street, Wilmington, North Carolina 28401, United States`,
//         coordinates: [-77.947920, 34.23195],
//         cuisine: `Pizza`,
//         description: `Located near the Bishop Arts District of Oak Cliff in Dallas, TX - Offering delicious neo artisan pizza`,
//
//     }
// ]


//Geocode from curriculum
function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function (res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function (data) {
            return data.features[0].center;
        });
}

//reverse geocode from curriculum
function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        .then(function (res) {
            return res.json();
        })
        // to get all the data from the request, comment out the following three lines...
        .then(function (data) {
            return data.features[0].place_name;
        });
}