import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store/store';

import ArticlePage from '../components/ArticlePage';

describe('ArticlePage Component', () => {
  test('ArticlePage renders correctly', () => {
    const component = shallow(
      <Provider store={store}>
        <ArticlePage />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});