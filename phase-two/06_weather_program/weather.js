const got = require('got');
const WeatherApi = require('./index');

class Weather {
  constructor (api){
    this.api = api;
    this.repositoryData = {};
  }

  fetch(city) {
    this.api.fetchWeatherData(city, (repositoryData) => {
      this.repositoryData = repositoryData;
    })
  }

  getWeatherData() {
    return this.repositoryData;
  }
}

module.exports = Weather;

/*
to test in Node:
const WeatherApi = require('./index');
const Weather = require('./weather');
const api = new WeatherApi();
const weather = new Weather(api);
weather.fetch('Bristol');
weather.getWeatherData();
*/