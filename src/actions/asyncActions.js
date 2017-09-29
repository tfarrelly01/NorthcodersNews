import axios from 'axios';
import { ROOT } from '../../config';
import { 
  fetchTopicsRequest, 
  fetchTopicsSuccess, 
  fetchTopicsError,
  fetchArticlesRequest, 
  fetchArticlesSuccess, 
  fetchArticlesError
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

// GET api/articles
export const fetchArticles = () => {
  return dispatch => {
    dispatch(fetchArticlesRequest());
    axios.get(`${ROOT}/articles`)
      .then(res => {
        dispatch(fetchArticlesSuccess(res.data.Articles));
      })
      .catch(err => {
        dispatch(fetchArticlesError(err));
      });

  };
}
