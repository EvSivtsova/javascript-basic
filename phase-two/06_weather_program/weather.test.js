const Weather = require('./weather');

describe('Weather', () => {
  it('gets the repo data fetched by the WeatherApi class', () => {
    const mockedApi = {
      fetchWeatherData: (city, callback) => {
        callback('Today the weather in Bristol is 22.84 degrees Celsuis, overcast clouds')
      }
    };

    const weather = new Weather(mockedApi);
    weather.fetch('Bristol');
    expect(weather.getWeatherData()).toBe('Today the weather in Bristol is 22.84 degrees Celsuis, overcast clouds');
  })
})