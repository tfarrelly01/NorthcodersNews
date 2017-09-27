import React from 'react';
import { shallow } from 'enzyme';
import ArticlePage from '../components/ArticlePage';

test('ArticlePage renders correctly', () => {
  const component = shallow(<ArticlePage />);
  expect(component).toMatchSnapshot();
});