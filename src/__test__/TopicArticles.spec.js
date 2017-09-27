import React from 'react';
import { shallow } from 'enzyme';
import TopicArticles from '../components/TopicArticles';

test('TopicArticles renders correctly', () => {
  const component = shallow(<TopicArticles />);
  expect(component).toMatchSnapshot();
});