    "use strict";

    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: OPEN_WEATHER_APPID,
        q: "Addison, US", //parameter q = the location
        units: "imperial" //changes the units from the standard kelvin to degrees F
    }).done(function (data) {
        console.log(data);
    });


