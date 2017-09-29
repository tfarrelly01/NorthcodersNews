import axios from 'axios';
import { ROOT } from '../../config';
import { 
  fetchTopicsRequest, 
  fetchTopicsSuccess, 
  fetchTopicsError,
} from './actionCreators';

// GET api/topics
export const fetchTopics = () => {
  return dispatch => {
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

// Temporary to bypass export const linting error
export const fetchNest = () => {

}
