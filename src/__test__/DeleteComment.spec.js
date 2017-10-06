import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store/store';

import DeleteComment from '../components/DeleteComment';

describe('DeleteComment Component', () => {
  test('DeleteComment renders correctly', () => {
    const component = shallow(
      <Provider store={store}>
        <DeleteComment />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});