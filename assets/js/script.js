var apiKey= "121f1ff0086c8c01f781759a701c2a43"


var date = dayjs();
let cardEl = document.getElementById('results-container')
let futureEl = document.getElementById('future')

// var cityNameEl = document.querySelector(".");
// var citySearchEl = document.querySelector(".");
// var searchHistoryEl = document.querySelector(".");
// var cityFeatured = document.querySelector(".");
// var cityDetails = document.querySelector(".");
// var futureDetails = document.querySelector(".");
// let searchParams = "Philadelphia"

// var image = "icon"
//     image.setAttribute("type", "icon")

function getCity(){
    var input = document.getElementById('submit-button').value

    var url=`https://api.openweathermap.org/geo/1.0/direct?q=${input}&appid=${apiKey}`
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

            // for loop?
            // futureDate.textContent = data.list[0].dt_txt
            // var tempEl = document.getElementById('temperature')
            // tempEl.textContent = `The current temperature is ${temperature}`
            // var cityEl = document.getElementById('cityName')
            // cityEl.textContent = cityName
            // var windEl = document.getElementById('windSpeed')
            // windEl.textContent = `Wind speeds ${wind} MPH`
            // var iconEl = document.getElementById('icon')
            // iconEl.src = icon
            // var descEl = document.getElementById('description')
            // descEl.textContent = desc
            // var humidityEl = document.getElementById('humid')
            // humidityEl.textContent = `${humidity}% humidity`
        
            // weatherEl = data.weather[0].icon
            // weatherIcon.src = `https://openweathermap.org/img/wn/${weatherIcon}.png`

            // for (let i = 0; i < rensponse.length; i++)
            // textContent
            getForecast(lat, lon);

        })

        input.onclick = getCity
    })

}
// function getWeatherCurrent(lat, lon){
    
// // console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=496722594d14437755a15609505942d8`)
// }

 

var formEl = document.querySelector('#search-form');
var resultsEl = document.querySelector('#results-container');
let increment = 8
function getForecast(lat, lon){
    cardEl.innerHTML=""


    var url=`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=121f1ff0086c8c01f781759a701c2a43`
    fetch(url)
    .then(function(response){
        console.log("are we here yet?");
        return response.json()
    })
    .then(function(data){
        console.log("how about here?");
        console.log(data);
        // console.log(data);
        // // var lat = data[0].lat
        // // var lon = data[0].lon
        // console.log(lat, lon);
        // let testDiv = document.createElement('h4')
        // testDiv.setAttribute('class', 'test2')
        // // testDiv.textContent = data[0].name
        // futureEl.appendChild(testDiv)

        // console.log(data.list[0].main.temp)
        
        for (i=3; i< data.list.length;i = i+8){
            console.log("you are here" + i);
            let dayCard = document.createElement('div')
            dayCard.setAttribute('class', 'card col')
            cardEl.appendChild(dayCard)
            let currentDay = data.list[i].dt_txt
            let currentDayEl = document.createElement('h3')
            currentDayEl.setAttribute('class', 'dayField weather-field')
            currentDayEl.textContent = currentDay
            let temp = Math.round((data.list[i].main.temp - 273) * (9/5)+32)
            let tempField = document.createElement('p')
            tempField.setAttribute('class', 'tempField weather-field')
            tempField.textContent = 'Temperature: ' + temp + 'F'
            let humidity = data.list[i].main.humidity
            let humidityEl = document.createElement('p')
            humidityEl.setAttribute('class', 'humidity weather-field')
            humidityEl.textContent = 'humidity: ' + humidity+'%'
            let windSpeed = data.list[i].wind.speed
            let windEl = document.createElement('p')
            windEl.setAttribute('class', 'windField weather-field')
            windEl.textContent = "wind: " + windSpeed +'mph'
            let description = data.list[i].weather[0].description
            let descriptionEl = document.createElement('p')
            descriptionEl.setAttribute('class','description weather-field')
            descriptionEl.textContent = 'Description: ' + description
            let icon = data.list[i].weather[0].icon
            let iconSrc = `https://openweathermap.org/img/w/${icon}.png`
            let iconDiv = document.createElement('img')
            iconDiv.setAttribute('class', 'icon weather-field')
            iconDiv.setAttribute('src', iconSrc)
            dayCard.appendChild(currentDayEl)
            dayCard.appendChild( tempField)
            dayCard.appendChild(  humidityEl)
            dayCard.appendChild(windEl)
            dayCard.appendChild(descriptionEl)
            dayCard.appendChild(iconDiv)
            increment = increment + 8
           
        }

 })}

document.getElementById("subButton").onclick = getCity


   