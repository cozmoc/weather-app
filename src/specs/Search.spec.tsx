import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import Search from '../components/Search/Search';
import { CLEAR_WEATHER } from '../types';

let wrapper: ReactWrapper;
let location = { pathname: '/' };
const useDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => useDispatch,
}));

beforeAll(() => {
  wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <Search />
      <Route
        path="*"
        render={props => {
          location = props.location;
          return null;
        }}
      />
    </MemoryRouter>
  );
});

test('Search the weather by city name', () => {
  wrapper.find('input').simulate('change', { target: { value: 'testing' } });
  wrapper.find('button').simulate('click');
  expect(useDispatch).toBeCalledWith({ type: CLEAR_WEATHER });
  expect(location.pathname).toEqual('/forecast/testing');
});

test('Search to match snapshot', () => {
  expect(wrapper).toMatchSnapshot();
});
