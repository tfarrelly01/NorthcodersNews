import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store/store';

import CommentList from '../components/CommentList';

describe('CommentList Component', () => {
  test('CommentList renders correctly', () => {
    const component = shallow(
      <Provider store={store}>
        <CommentList />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});