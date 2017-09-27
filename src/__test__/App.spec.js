import React from 'react';
// import renderer from 'react-test-renderer';
// used by enzyme
import { shallow } from 'enzyme';
// import { shallow, render, static } from 'enzyme';
import App from '../components/App';

test('App renders correctly', () => {
//  const component = renderer.create(<Search />);
//  const tree = component.toJSON();
//  expect(tree).toMatchSnapshot();

//  const component = shallow(<Search shows={preload.shows} />);

  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
