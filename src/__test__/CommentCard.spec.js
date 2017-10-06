import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store/store';

import CommentCard from '../components/CommentCard';

describe('CommentCard Component', () => {
  test('CommentCard renders correctly', () => {
    const component = shallow(
      <Provider store={store}>
        <CommentCard />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});