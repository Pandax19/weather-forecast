var apiKey= "121f1ff0086c8c01f781759a701c2a43"





var date = dayjs();
let cardEl = document.getElementById('results-container')
// var cityNameEl = document.querySelector(".");
// var citySearchEl = document.querySelector(".");
// var searchHistoryEl = document.querySelector(".");
// var cityFeatured = document.querySelector(".");
// var cityDetails = document.querySelector(".");
// var futureDetails = document.querySelector(".");
// let searchParams = "Philadelphia"

function getCity(){
    var input = document.getElementById('submit-button').value

    var url=`http://api.openweathermap.org/geo/1.0/direct?q=${input}&appid=${apiKey}`
    fetch(url)
    .then(function (response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        var lat = data[0].lat
        var lon = data[0].lon
        console.log(lat, lon);
        let testDiv = document.createElement('h1')
        testDiv.setAttribute('class', 'test')
        testDiv.textContent = data[0].name
        cardEl.appendChild(testDiv)
        // return data

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=496722594d14437755a15609505942d8`)
        .then(function(response){
            return response.json()
        }).then(function(data){
            console.log(data)


            var cityName = data.name
            //var date = data.name
            var icon = data.weather[0].icon
            var desc = data.weather[0].description
            var temperature = Math.round((data.main.temp - 273) * (9/5) + 32)
            console.log(temperature)
            var wind = data.wind.speed
            var humidity = data.main.humidity



            var tempEl = document.getElementById('temperature')
            tempEl.textContent = temperature
            var cityEl = document.getElementById('cityName')
            cityEl.textContent = cityName
            var windEl = document.getElementById('windSpeed')
            windEl.textContent = windSpeed
            var iconEl = document.getElementById('icon')
            iconEl.textContent = icon
            var descEl = document.getElementById('description')
            descEl.textContent = description
            var humidityEl = document.getElementById('humid')
            humidityEl.textContent = humid
            




        })

        input.onclick = getCity
    })
    // .then(function(){
    //     console.log("We Are Here");

    // })
    // fetch(url){
    //     ...
    // }
    // .then(data){
    //     data=[]        
    //     var lat = data[0].lat;
    //     var lon = data[0].lon;
    // console.log(lat + ", " + lon);
    // getWeatherCurrent(lat,lon);
    // }
}
function getWeatherCurrent(lat, lon){
    
console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=496722594d14437755a15609505942d8`)
}



var formEl = document.querySelector('#search-form');
var reseultsEl = document.querySelector('#results-container');


// function getApi(requestUrl) {
//     fetch(requestUrl)
//       .then(function (response) {
//         console.log(response);
//         if (response.status === 200) {
//           responseText.textContent = response.status;
//         }
//         return response.json();
//     });
//   }
  
//   getApi(requestUrl);

document.getElementById("subButton").onclick = getCity