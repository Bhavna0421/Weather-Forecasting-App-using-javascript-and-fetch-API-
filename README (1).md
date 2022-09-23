
# Weather Forecasting-App using HTML CSS And JAVASCRIPTS.

This is a weather app which shows you weather of each and every state.
It show you the weather of the city, temperature , description , humidity and wind .And it also have a cute weather gif with a quick note .

I have made this by fetching API , with the help of these it show you the full description of weather of the city you search.

I also took an efforts on making good UI.





## Acknowledgements

-[weather-icon]https://openweathermap.org/img/wn/

-[continuosly changing background]https://source.unsplash.com/1600x900/

-[search icon]https://github.com/react-icons/react-icons
## Fetch API





    let weather = {
   
    "apikey":"088c7de754f31da2f51646091b2b93aa" ,
       
        fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&exclude=minutely,alerts&appid="
            + this.apikey
            
      )
    
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
        .then((data) => this.displayWeather(data));
    },
};
## weather-forecast UI

![App Screenshot](https://user-images.githubusercontent.com/98327416/190887916-5386408d-bdc6-4259-b6fa-0c75c9eab0d3.png)

## Working: searching weather

![App Screenshot](https://user-images.githubusercontent.com/98327416/191972318-99ca4d23-69c0-4db1-9def-37bcd603ef86.png)

##  Loom vedio for better experience


https://www.loom.com/share/c47056cff1d84b11a340fef607ba3223


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bhavna-sharma-1060a620b/)



## Feedback

If you have any feedback, please reach out to me at bhavnasharma0421@gmail.com

