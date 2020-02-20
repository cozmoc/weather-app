import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import Forecast from '../components/Forecast/Forecast';
import WeatherInterface, { DataResponse } from '../interfaces/Weather';
import dataMock from './mocks/data';
import actions from '../actions/weather';
import 'jest-styled-components';

let wrapper: ReactWrapper;
const useDispatch = jest.fn();
let useData = false;

const useSelectorWithData: (allowData: boolean) => { weather: WeatherInterface } = allowData => ({
  weather: {
    isLoading: false,
    data: allowData ? dataMock : {} as DataResponse,
    error: null
  }
});

jest.mock('react-redux', () => ({
  useDispatch: () => useDispatch,
  useSelector: (cb: Function) => cb(useSelectorWithData(useData))
}));

beforeEach(() => {
  wrapper = mount(
    <MemoryRouter initialEntries={['/forecast/cambridge']} keyLength={0}>
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
  expect(wrapper.text()).toMatch('Cambridge, CA');
});

test('Forecast to match snapshot', () => {
  expect(wrapper).toMatchSnapshot();
});
