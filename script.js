// define variables
var APIKey = "b663a62f70241903dcba8316815769b7";
var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var forecast = document.querySelector('#forecast');
var temp = document.querySelector('.temp');
var humidity = document.querySelector('.humidity');
var wind = document.querySelector('.wind');
var button= document.querySelector('.submit');
var submissionResponseEl = document.querySelector("#response");

//moment.js to format date 
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));


//-----------------------------Function for searching weather by city---------//

//var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=+input.value+'&units=imperial'+'&appid='+APIKey";



button.addEventListener('click', function(event){
    event.preventDefault();
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value + '&units=imperial'+'&appid='+APIKey)
    .then(function(response) {
        return response.json();
      }) 

    .then(function(data) {
      var tempValue = data['main']['temp'];
      var nameValue = data['name'];
      var humidityValue = data ['main']['humidity'];
      var windValue = data ['wind'] ['speed'];

      main.innerHTML = nameValue;
      temp.innerHTML = "Temperature : "+tempValue+ "°F ";
      humidity.innerHTML = "Humidity : "+humidityValue+"%";
      wind.innerHTML = "Wind Speed : " +windValue+"MPH";
      input.value ="";
    })

    .catch(function(error) {
        console.log(error)
      });
  
   event.preventDefault();
     fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + input.value + '&units=imperial' + '&appid=' + APIKey)
     .then(function(response) {
         return response.json()
        .then((data) => {console.log(data)
          var days = data.list
          for (let i = 0; i < 5; i++){

              var column = $("<div>").addClass("col-sm-2");
              var card = $("<div>").addClass("card");
              var cardBod = $("<div>").addClass("card-body");
              var cityDate = $("<h6>").addClass("card-title").text(moment(days[i * 8].dt_txt).format("MM/DD/YYYY"));
              var temp = $("<p>").text("Temperature : " + days[i * 8].main.temp.toFixed()+"°F ");
              var humidity = $("<p>").text("Humidity : "+days[i * 8].main.humidity+"%");
              $("#forecast").append(column.append(card.append(cardBod.append(cityDate,temp,humidity))))
          }




        });         

       }); 




var response = input.value 
submissionResponseEl.textContent = response;

var data = input.value 
submissionResponseEl.textContent = data;


     })
