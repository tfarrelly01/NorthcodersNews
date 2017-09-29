import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

describe('App Component', () => {
  test('App renders correctly', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
