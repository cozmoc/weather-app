import { FETCH_WEATHER, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE, CLEAR_WEATHER } from '../types';
import { AnyAction } from 'redux';
import WeatherInterface, { DataResponse } from '../interfaces/Weather';

const initialState: WeatherInterface = {
  isLoading: false,
  data: {} as DataResponse,
  error: null
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
      }
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        error: action.error.response.data,
        isLoading: false,
      }
    case CLEAR_WEATHER:
      return {
        ...initialState,
        data: {
          list: []
        }
      }
    default:
      return state
  }
}
