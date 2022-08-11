let weather = {
    "apikey":"088c7de754f31da2f51646091b2b93aa" ,
    // fecthing api data
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&exclude=minutely,alerts&appid="
            + this.apikey
            
      )
    //   throw error if weather not found or user click enter without adding weather
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
        .then((data) => this.displayWeather(data));
    },
    // function to display data
    displayWeather: function (data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const { temp, humidity} = data.main;
        const { speed } = data.wind;
        // console.log(name,icon,description,temp,humidity,speed)
        // query selector to display api fetch data
        document.querySelector(".city").innerText = "weather in"  +  name ;
        document.querySelector(".icon").src= "https://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp  + "°C";
        document.querySelector(".humidity").innerText = "Humidity:"  + humidity + "%" ;
        document.querySelector(".wind").innerText = "Wind speed:"  + speed + "km/h" ;
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name +"')"

    },
    // function to get value when user click search
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
};
// action when button clcik
document
.querySelector(".search button")
.addEventListener("click" , function (){
    weather.search();
});
// action when user tap on enter
document
.querySelector(".search-bar")
.addEventListener("keyup" , function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});


