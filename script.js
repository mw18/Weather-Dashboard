// define variables
var APIKey = "b663a62f70241903dcba8316815769b7";
var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var humidity = document.querySelector('.humidity');
var wind = document.querySelector('.wind');
var button= document.querySelector('.submit');

//-----------------------------Function for searching weather by city---------//

//var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=+input.value+'&units=imperial'+'&appid='+APIKey";

button.addEventListener('click', function(name){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=imperial'+'&appid='+APIKey)
    .then(function(response) {
        return response.json();
      })

    .then(function(data) {
      var tempValue = data['main']['temp'];
      var nameValue = data['name'];
      var humidityValue = data ['main']['humidity'];
      var windValue = data ['wind'] ['speed'];
    
      main.innerHTML = nameValue;
      temp.innerHTML = "Temperature : "+tempValue+"°F ";
      humidity.innerHTML = "Humidity : "+humidityValue+"%";
      wind.innerHTML = "Wind Speed : " +windValue+"MPH";
      input.value ="";
    })

    .catch(function(error) {
        console.log(error)
      });

    })

