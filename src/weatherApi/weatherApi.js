
const weatherbitKey = process.env.WEATHERBIT_KEY;
const countryCodeEndpoint = 'https://raw.githubusercontent.com/jgudo/react-weather-app/master/static/country-code.json';
const weatherbitForecast = 'https://api.weatherbit.io/v2.0/forecast/daily?';


export const fetchCountryCode = async () => {
  const requestCountryCode = await fetch(countryCodeEndpoint);
  const countryCode = await requestCountryCode.json();

  return countryCode;
};

export const fetchForecast = async (query, lat, lon) => {
  const searchQuery = query ? `city=${query}&` : '';
  const latitude = lat ? `lat=${lat}&` : '';
  const longitude = lon ? `lon=${lon}&` : '';
  const url = `${weatherbitForecast + searchQuery + latitude + longitude}days=7&key=${weatherbitKey}`;
  const forecastRequest = await fetch(url);
  const forecast = await forecastRequest.json();

  return forecast;
};

export const fetchCurrentLocationAndWeather = async () => {
  const requestLocation = await fetch(ipdataEndpoint);
  const location = await requestLocation.json();
  const weather = await fetchForecast(undefined, location.latitude, location.longitude)

  return weather;
};
