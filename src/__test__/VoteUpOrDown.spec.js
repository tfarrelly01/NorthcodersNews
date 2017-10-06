import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store/store';

import VoteUpOrDown from '../components/VoteUpOrDown';

describe('VoteUpOrDown Component', () => {
  test('VoteUpOrDown renders correctly', () => {
    const component = shallow(
      <Provider store={store}>
        <VoteUpOrDown />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});