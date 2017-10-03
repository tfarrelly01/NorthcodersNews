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

  test('Async Action: fetchUser', (done) => {
    const dispatchMock = jest.fn();
    const username = 'northcoder';
    moxios.withMock(() => {

    //  asyncActions.fetchUser(username)(dispatchMock);
      const thunk = asyncActions.fetchUser(username);
      thunk(dispatchMock);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request
        .respondWith({
          status: 200,
          response: data
        })
        .then(() => {
          expect(request.url).toEqual(`${ROOT}/users/${username}`);
          expect(dispatchMock).toBeCalledWith(actions.fetchUserRequest());
          expect(dispatchMock).toBeCalledWith(actions.fetchUserSuccess());
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

    //  asyncActions.fetchTopicArticles(topicSlug)(dispatchMock);
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

  test('Async Action: fetchArticle', (done) => {
    const dispatchMock = jest.fn();
    const articleId = '12345';
    moxios.withMock(() => {

    //  asyncActions.fetchArticle(articleId)(dispatchMock);
      const thunk = asyncActions.fetchArticle(articleId);
      thunk(dispatchMock);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request
        .respondWith({
          status: 200,
          response: data
        })
        .then(() => {
          expect(request.url).toEqual(`${ROOT}/articles/${articleId}`);
          expect(dispatchMock).toBeCalledWith(actions.fetchArticleRequest());
          expect(dispatchMock).toBeCalledWith(actions.fetchArticleSuccess());
          done();
        })
        .catch(done.fail);
      })
    });
  });
  
  test('Async Action: fetchArticleComments', (done) => {
    const dispatchMock = jest.fn();
    const articleId = '12345';
    moxios.withMock(() => {

    //  asyncActions.fetchArticleComments(articleId)(dispatchMock);
      const thunk = asyncActions.fetchArticleComments(articleId);
      thunk(dispatchMock);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request
        .respondWith({
          status: 200,
          response: data
        })
        .then(() => {
          expect(request.url).toEqual(`${ROOT}/articles/${articleId}/comments`);
          expect(dispatchMock).toBeCalledWith(actions.fetchArticleCommentsRequest());
          expect(dispatchMock).toBeCalledWith(actions.fetchArticleCommentsSuccess());
          done();
        })
        .catch(done.fail);
      })
    });
  });

  test('Async Action: addComment', (done) => {
    const dispatchMock = jest.fn();
    const articleId = '12345';
    const comment = 'This is a comment'
    moxios.withMock(() => {

    //  asyncActions.addComment(articleId)(dispatchMock);
      const thunk = asyncActions.addComment(articleId, comment);
      thunk(dispatchMock);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request
        .respondWith({
          status: 200,
          response: comment
        })
        .then(() => {
          expect(request.url).toEqual(`${ROOT}/articles/${articleId}/comments`);
          expect(dispatchMock).toBeCalledWith(actions.addCommentRequest());
          expect(dispatchMock).toBeCalledWith(actions.addCommentSuccess());
          done();
        })
        .catch(done.fail);
      })
    });
  });
});