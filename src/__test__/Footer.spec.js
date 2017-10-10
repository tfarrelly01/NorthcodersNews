import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store/store';

import Footer from '../components/Footer';

describe('Footer Component', () => {
  test('Footer renders correctly', () => {
    const component = shallow(
      <Provider store={store}>
        <Footer />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});