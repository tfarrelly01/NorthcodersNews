import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store/store';

import ArticleList from '../components/ArticleList';

describe('ArticleList Component', () => {
  test('ArticleList renders correctly', () => {
    const component = shallow(
      <Provider store={store}>
        <ArticleList />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
