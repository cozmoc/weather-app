import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from '../components/App/App';

let app: ShallowWrapper;

beforeAll(() => {
  app = shallow(<App />);
});

test('App renders and has the title Weather App', () => {
  expect(app.find('NavbarBrand').children().text()).toEqual('Weather App');
});

test('App to match snapshot', () => {
  expect(app).toMatchSnapshot();
});
