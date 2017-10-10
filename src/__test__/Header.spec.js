import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store/store';

import Header from '../components/Header';

describe('Header Component', () => {
  test('Header renders correctly', () => {
    const component = shallow(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});