import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store/store';

import TopicCard from '../components/TopicCard';

describe('TopicCard Component', () => {
  test('TopicCard renders correctly', () => {
    const component = shallow(
      <Provider store={store}>
        <TopicCard />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});