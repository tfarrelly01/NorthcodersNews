import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store/store';
import TopicHeadings from '../components/TopicHeadings';

describe('TopicHeadings Component', () => {
  test('TopicHeadings renders correctly', () => {
    const component = shallow(
      <Provider store={store}>
        <TopicHeadings />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
