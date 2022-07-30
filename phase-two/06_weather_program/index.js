const got = require('got');
const apiKey = require('./apiKey');

class WeatherApi {  
  constructor() {
    this.apiKey = apiKey;   
  }
  
  fetchWeatherData(city, callbackFunction) {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${this.apiKey}`;
    got(apiUrl)
    .then(response => {
      const weather = JSON.parse(response.body);
      callbackFunction(`Today the weather in ${city} is ${weather.main.temp} degrees Celsuis, ${weather.weather[0].description}`);
    });
  }
}

module.exports = WeatherApi;

// api = new WeatherApi;
// api.fetchWeatherData('London', (weatherData) => {
//   console.log(weatherData);
// });