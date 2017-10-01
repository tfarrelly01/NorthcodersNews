import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store/store';

import HomePage from '../components/HomePage';

describe('HomePage Component', () => {
  test('HomePage renders correctly', () => {
    const component = shallow(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});


