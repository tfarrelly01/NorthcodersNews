import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../components/HomePage';

xtest('HomePage renders correctly', () => {
  const component = shallow(<HomePage />);
  expect(component).toMatchSnapshot();
});