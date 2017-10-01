import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store/store';

import ArticleCard from '../components/ArticleCard';

describe('ArticleCard Component', () => {
  test('ArticleCard renders correctly', () => {
    const component = shallow(
      <Provider store={store}>
        <ArticleCard />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});