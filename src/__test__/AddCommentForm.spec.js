import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store/store';

import AddCommentForm from '../components/AddCommentForm';

describe('AddCommentForm Component', () => {
  test('AddCommentForm renders correctly', () => {
    const component = shallow(
      <Provider store={store}>
        <AddCommentForm />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});