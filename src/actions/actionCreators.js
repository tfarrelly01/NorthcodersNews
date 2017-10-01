import * as types from './actionTypes';

export const fetchTopicsRequest = () => {
  return {
    type: types.FETCH_TOPICS_REQUEST
  };
};

export const fetchTopicsSuccess = (topics) => {
  return {
    type: types.FETCH_TOPICS_SUCCESS,
    payload: topics
  };
};

export const fetchTopicsError = (error) => {
  return {
    type: types.FETCH_TOPICS_ERROR,
    payload: error
  };
};

export const fetchArticlesRequest = () => {
  return {
    type: types.FETCH_ARTICLES_REQUEST
  };
};

export const fetchArticlesSuccess = (articles) => {
  return {
    type: types.FETCH_ARTICLES_SUCCESS,
    payload: articles
  };
};

export const fetchArticlesError = (error) => {
  return {
    type: types.FETCH_ARTICLES_ERROR,
    payload: error
  };
};

export const fetchUsersRequest = () => {
  return {
    type: types.FETCH_USERS_REQUEST
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: types.FETCH_USERS_SUCCESS,
    payload: users
  };
};

export const fetchUsersError = (error) => {
  return {
    type: types.FETCH_USERS_ERROR,
    payload: error
  };
};

export const fetchTopicArticlesRequest = () => {
  return {
    type: types.FETCH_TOPIC_ARTICLES_REQUEST
  };
};

export const fetchTopicArticlesSuccess = (articles) => {
  return {
    type: types.FETCH_TOPIC_ARTICLES_SUCCESS,
    payload: articles
  };
};

export const fetchTopicArticlesError = (error) => {
  return {
    type: types.FETCH_TOPIC_ARTICLES_ERROR,
    payload: error
  };
};


