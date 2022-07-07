

var citySearchEl = document.querySelector("#citySearch");
var cityInputEl = document.querySelector("#city");

var formSubmitHandler = function(event) {
    event.preventDefault();

    var city = cityInputEl.value.trim();

    if (city) {
        getCity(city);
        cityInputEl.value ="";
    }
    else {
        alert("Please enter a City");
    }
    console.log(event);
};

var getCity = function(city) {
    var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=cityname&limit=&appid={d7c6d978ddb159e8e965d8d8fa44ad3e}";
//    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}";
        // var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

citySearchEl.addEventListener("submit", formSubmitHandler);
