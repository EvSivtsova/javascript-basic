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

/*
to test in Node:
const WeatherApi = require('./index');
api = new WeatherApi;
api.fetchWeatherData('Bristol', (weatherData) => {
  console.log(weatherData);
});
*/