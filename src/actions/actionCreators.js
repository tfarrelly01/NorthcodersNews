import * as types from './actionTypes';

export function fetchTopicsRequest () {
  return {
    type: types.FETCH_TOPICS_REQUEST
  };
}

export function fetchTopicsSuccess (topics) {
  return {
    type: types.FETCH_TOPICS_SUCCESS,
    payload: topics
  };
}

export function fetchTopicsError (error) {
  return {
    type: types.FETCH_TOPICS_ERROR,
    payload: error
  };
}

export function fetchArticlesRequest () {
  return {
    type: types.FETCH_ARTICLES_REQUEST
  };
}

export function fetchArticlesSuccess (articles) {
  return {
    type: types.FETCH_ARTICLES_SUCCESS,
    payload: articles
  };
}

export function fetchArticlesError (error) {
  return {
    type: types.FETCH_ARTICLES_ERROR,
    payload: error
  };
}