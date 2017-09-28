import moxios from 'moxios';
import { fetchTopicsRequest } from '../actions/actionCreators';
import fetchTopics from '../actions/asyncActions';

import { ROOT } from '../../config';

const allTopics = [
  'topic1',
  'topic2',
  'topic3'
];

test('getAPIDetails', (done) => {
  const dispatchMock = jest.fn();
  moxios.withMock(() => {

  //  fetchTopics()(dispatchMock);
    const thunk = fetchTopics();
    thunk(dispatchMock);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
       .respondWith({
         status: 200,
         response: allTopics
       })
       .then(() =>{
         expect(request.url).toEqual(`${ROOT}/topics`);
         expect(dispatchMock).toBeCalledWith(fetchTopicsRequest());
         done();
       })
       .catch(done.fail);
    })
  })
});