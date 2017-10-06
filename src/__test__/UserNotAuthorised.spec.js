import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store/store';

import UserNotAuthorised from '../components/UserNotAuthorised';

describe('UserNotAuthorised Component', () => {
  test('UserNotAuthorised renders correctly', () => {
    const component = shallow(
      <Provider store={store}>
        <UserNotAuthorised />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});