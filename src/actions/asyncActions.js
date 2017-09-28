import axios from 'axios';
import { ROOT } from '../../config';
import { fetchTopicsRequest, fetchTopicsSuccess, fetchTopicsError } from './actionCreators';

// GET api/topics
function fetchTopics () {
  return function (dispatch) {
    dispatch(fetchTopicsRequest());
    axios.get(`${ROOT}/topics`)
      .then(res => {
        dispatch(fetchTopicsSuccess(res.data.topics));
      })
      .catch(err => {
        dispatch(fetchTopicsError(err));
      });

  };
}

export default fetchTopics;