import React from 'react';
import { shallow } from 'enzyme';
import FourOhFour from '../components/FourOhFour';

test('FourOhFour renders correctly', () => {
  const component = shallow(<FourOhFour />);
  expect(component).toMatchSnapshot();
});