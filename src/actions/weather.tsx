import { FETCH_WEATHER, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE, CLEAR_WEATHER } from '../types';
const APPID = process.env.REACT_APP_APPID;

const fetchWeather = (city: string) => {
  return ({
    types: [FETCH_WEATHER, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE],
    payload: {
      request: {
        url: `/forecast/daily/?q=${city}&APPID=${APPID}&cnt=5&type=accurate`,
        method: 'GET',
        headers: {}
      }
    }
  });
}

const clearWeather = () => {
  return ({
    type: CLEAR_WEATHER,
  });
}

export default {
  fetchWeather,
  clearWeather,
};
