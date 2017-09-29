import axios from 'axios';
import { ROOT } from '../../config';
import * as actions from './actionCreators';

// GET api/topics
export const fetchTopics = () => {
  return dispatch => {
    dispatch(actions.fetchTopicsRequest());
    axios.get(`${ROOT}/topics`)
      .then(res => {
        dispatch(actions.fetchTopicsSuccess(res.data.topics));
      })
      .catch(err => {
        dispatch(actions.fetchTopicsError(err));
      });
  };
}

// GET api/articles
export const fetchArticles = () => {
  return dispatch => {
    dispatch(actions.fetchArticlesRequest());
    axios.get(`${ROOT}/articles`)
      .then(res => {
        dispatch(actions.fetchArticlesSuccess(res.data.Articles));
      })
      .catch(err => {
        dispatch(actions.fetchArticlesError(err));
      });

  };
}
