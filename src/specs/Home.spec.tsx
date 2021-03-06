import React from 'react';
import { shallow, ShallowWrapper, mount } from 'enzyme';
import Home from '../components/Home/Home';
import 'jest-styled-components';

let home: ShallowWrapper;

beforeAll(() => {
  home = shallow(<Home />);
});

test('Home renders and has the title Enter a City and State', () => {
  expect(home.children().first().text()).toEqual('Enter a City and State');
});

test('Home to match snapshot', () => {
  expect(home).toMatchSnapshot();
});
