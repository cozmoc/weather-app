import { FETCH_WEATHER, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE, CLEAR_WEATHER } from '../types';

const fetchWeather = (city: string) => ({
  types: [FETCH_WEATHER, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE],
  payload: {
    request: {
      url: `/forecast/daily?city=${city}`,
      method: 'GET',
      headers: {}
    }
  }
});

const clearWeather = () => ({ type: CLEAR_WEATHER });

export default {
  fetchWeather,
  clearWeather,
};
