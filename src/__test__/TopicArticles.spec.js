import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store/store';

import TopicArticles from '../components/TopicArticles';

describe('TopicArticles Component', () => {
  test('TopicArticles renders correctly', () => {
    const component = shallow(
      <Provider store={store}>
        <TopicArticles />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});