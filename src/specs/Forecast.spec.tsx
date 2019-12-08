import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import Forecast from '../components/Forecast/Forecast';
import WeatherInterface, { DataResponse } from '../interfaces/Weather';
import dataMock from './mocks/data';
import actions from '../actions/weather';

let wrapper: ReactWrapper;
const useDispatch = jest.fn();
let useData = false;

const useSelectorWithData: (toggle: boolean) => { weather: WeatherInterface } = toggle => ({
  weather: {
    isLoading: false,
    data: toggle ? dataMock : {} as DataResponse,
    error: null
  }
});

jest.mock('react-redux', () => ({
  useDispatch: () => useDispatch,
  useSelector: (cb: Function) => cb(useSelectorWithData(useData))
}));

beforeEach(() => {
  wrapper = mount(
    <MemoryRouter initialEntries={['/forecast/cambridge']}>
      <Route path='/forecast/:city'>
        <Forecast />
      </Route>
    </MemoryRouter>
  );
});

test('Get Forecast by city name', () => {
  expect(useDispatch).toBeCalledWith(actions.fetchWeather('cambridge'));
  useData = true;
});

test('Display Forecast by city name', () => {
  expect(wrapper.text()).toEqual('Cambridge, CA120372Sun Dec 08RainMon Dec 09RainTue Dec 10SnowWed Dec 11CloudsThu Dec 12Clouds');
});

test('Forecast to match snapshot', () => {
  expect(wrapper).toMatchSnapshot();
});
