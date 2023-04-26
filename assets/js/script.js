var apiKey= "121f1ff0086c8c01f781759a701c2a43"


var date = dayjs();
let cardEl = document.getElementById('results-container')
// var cityNameEl = document.querySelector(".");
// var citySearchEl = document.querySelector(".");
// var searchHistoryEl = document.querySelector(".");
// var cityFeatured = document.querySelector(".");
// var cityDetails = document.querySelector(".");
// var futureDetails = document.querySelector(".");
let searchParams = "Philadelphia"

function getCity(){
    var url=`http://api.openweathermap.org/geo/1.0/direct?q=${searchParams}&appid=${apiKey}`
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
        return data
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

getCity()


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
  
  