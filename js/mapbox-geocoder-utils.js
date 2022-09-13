"use strict";



    mapboxgl.accessToken = MAPBOX_TOKEN;
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-77.88, 34.21], // starting position [lng, lat]
    zoom: 9, // starting zoom
});

let restaurants = [
    {
        name: `Circa 1922`,
        address: `8 N Front Street, Wilmington, North Carolina 28401, United States`,
        coordinates: [-77.948570,34.235695],
        cuisine: `Tapas`,
    },
    {
        name:`Catch`,
        address: `6623 Market Street, Wilmington, North Carolina 28405, United States`,
        coordinates: [-77.838730, 34.257920],
        cuisine:`Fried Chicken / Nashville Hot Chicken`,
    },
    {
        name: `Fork'n Cork`,
        address: `122 Market Street, Wilmington, North Carolina 28401, United States`,
        coordinates: [-77.947920, 34.23195],
        cuisine: `Pizza`,
        description: `Located near the Bishop Arts District of Oak Cliff in Dallas, TX - Offering delicious neo artisan pizza`,

    }
]

//nav & search controls
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);
map.addControl(new mapboxgl.NavigationControl())

//loop
restaurants.forEach((restaurant) => {
    const {name, address, cuisine, description} = restaurant
    let popup = new mapboxgl.Popup()
        .setHTML(`
        <div class="card" style="width: 100%">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${address}</h6>
            <p class="card-text">${description}</p>
            <p class="card-text">${cuisine}</p>
          </div>
        </div>
        `)

    let marker = new mapboxgl.Marker()
        .setLngLat(restaurant.coordinates)
        .addTo(map)
        .setPopup(popup)
    popup.addTo(map)
})

function renderLngLat(coordinates) {
    $('#lnglat').html(`
    <h5 class="m-3">Longitude: ${coordinates.lng.toFixed(3)}</h5>
    <br>
    <h5 class="m-3">Latitude: ${coordinates.lat.toFixed(3)}</h5>
    `)
}

$('#search-btn').click(() => {
    const search = $('#search-input').val()
    console.log(search)
    geocode(search, mapboxgl.accessToken).then((location) => {
        map.setCenter(location)
        map.setZoom(9)
        let marker = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat([location[0],location[1]])
            .addTo(map)
        let coordinates = marker.getLngLat()
        renderLngLat(coordinates)

        marker.on('dragend',() => {
            coordinates = marker.getLngLat();
            renderLngLat(coordinates)
        })
    })
})
//Geocode from curriculum
function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}
//reverse geocode from curriculum
function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        })
        // to get all the data from the request, comment out the following three lines...
        .then(function(data) {
            return data.features[0].place_name;
        });
}