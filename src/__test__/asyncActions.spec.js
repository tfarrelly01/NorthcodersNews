import moxios from 'moxios';
import * as actions from '../actions/actionCreators';
import * as asyncActions from '../actions/asyncActions';
import { ROOT } from '../../config';

const data = [
  'data1',
  'data2',
  'data3'
];

describe('Test Async Actions  ', () => {
  test('Async Action: fetchTopics', (done) => {
    const dispatchMock = jest.fn();
    moxios.withMock(() => {

    //  asyncActions.fetchTopics()(dispatchMock);
      const thunk = asyncActions.fetchTopics();
      thunk(dispatchMock);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request
        .respondWith({
          status: 200,
          response: data
        })
        .then(() => {
          expect(request.url).toEqual(`${ROOT}/topics`);
          expect(dispatchMock).toBeCalledWith(actions.fetchTopicsRequest());
          expect(dispatchMock).toBeCalledWith(actions.fetchTopicsSuccess());
          done();
        })
        .catch(done.fail);
      })
    });
  });

  test('Async Action: fetchArticles', (done) => {
    const dispatchMock = jest.fn();
    moxios.withMock(() => {

    //  asyncActions.fetchArticles()(dispatchMock);
      const thunk = asyncActions.fetchArticles();
      thunk(dispatchMock);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request
        .respondWith({
          status: 200,
          response: data
        })
        .then(() => {
          expect(request.url).toEqual(`${ROOT}/articles`);
          expect(dispatchMock).toBeCalledWith(actions.fetchArticlesRequest());
          expect(dispatchMock).toBeCalledWith(actions.fetchArticlesSuccess());
          done();
        })
        .catch(done.fail);
      })
    });
  });

  test('Async Action: fetchUsers', (done) => {
    const dispatchMock = jest.fn();
    moxios.withMock(() => {

    //  asyncActions.fetchUsers()(dispatchMock);
      const thunk = asyncActions.fetchUsers();
      thunk(dispatchMock);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request
        .respondWith({
          status: 200,
          response: data
        })
        .then(() => {
          expect(request.url).toEqual(`${ROOT}/users`);
          expect(dispatchMock).toBeCalledWith(actions.fetchUsersRequest());
          expect(dispatchMock).toBeCalledWith(actions.fetchUsersSuccess());
          done();
        })
        .catch(done.fail);
      })
    });
  });

  test('Async Action: fetchTopicArticles', (done) => {
    const dispatchMock = jest.fn();
    const topicSlug = 'food';
    moxios.withMock(() => {

    //  asyncActions.fetchTopicArticles()(dispatchMock);
      const thunk = asyncActions.fetchTopicArticles(topicSlug);
      thunk(dispatchMock);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request
        .respondWith({
          status: 200,
          response: data
        })
        .then(() => {
          expect(request.url).toEqual(`${ROOT}/topics/${topicSlug}/articles`);
          expect(dispatchMock).toBeCalledWith(actions.fetchTopicArticlesRequest());
          expect(dispatchMock).toBeCalledWith(actions.fetchTopicArticlesSuccess());
          done();
        })
        .catch(done.fail);
      })
    });
  });
});