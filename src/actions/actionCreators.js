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

export const fetchUserRequest = () => {
  return {
    type: types.FETCH_USER_REQUEST
  };
};

export const fetchUserSuccess = (user) => {
  return {
    type: types.FETCH_USER_SUCCESS,
    payload: user
  };
};

export const fetchUserError = (error) => {
  return {
    type: types.FETCH_USER_ERROR,
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

export const fetchArticleRequest = () => {
  return {
    type: types.FETCH_ARTICLE_REQUEST
  };
};

export const fetchArticleSuccess = (article) => {
  return {
    type: types.FETCH_ARTICLE_SUCCESS,
    payload: article
  };
};

export const fetchArticleError = (error) => {
  return {
    type: types.FETCH_ARTICLE_ERROR,
    payload: error
  };
};

export const fetchArticleCommentsRequest = () => {
  return {
    type: types.FETCH_ARTICLE_COMMENTS_REQUEST
  };
};

export const fetchArticleCommentsSuccess = (comments) => {
  return {
    type: types.FETCH_ARTICLE_COMMENTS_SUCCESS,
    payload: comments
  };
};

export const fetchArticleCommentsError = (error) => {
  return {
    type: types.FETCH_ARTICLE_COMMENTS_ERROR,
    payload: error
  };
};

export function articleVoteRequest() {
  return {
    type: types.ARTICLE_VOTE_REQUEST,
  };
}

export function articleVoteSuccess(article) {
  return {
    type: types.ARTICLE_VOTE_SUCCESS,
    payload: article
  };
}

export function articleVoteError(error) {
  return {
    type: types.ARTICLE_VOTE_ERROR,
    payload: error
  };
}

export function commentVoteRequest() {
  return {
    type: types.COMMENT_VOTE_REQUEST,
  };
}

export function commentVoteSuccess(comment) {
  return {
    type: types.COMMENT_VOTE_SUCCESS,
    payload: comment
  };
}

export function commentVoteError(error) {
  return {
    type: types.COMMENT_VOTE_ERROR,
    payload: error
  };
}

export const addCommentRequest = () => {
  return {
    type: types.ADD_COMMENT_REQUEST
  };
};

export const addCommentSuccess = (comment) => {
  return {
    type: types.ADD_COMMENT_SUCCESS,
    payload: comment
  };
};

export const addCommentError = (error) => {
  return {
    type: types.ADD_COMMENT_ERROR,
    payload: error
  };
};

export const deleteCommentRequest = () => {
  return {
    type: types.DELETE_COMMENT_REQUEST
  };
};

export const deleteCommentSuccess = (commentId, message) => {
  return {
    type: types.DELETE_COMMENT_SUCCESS,
    commentId,
    payload: message
  };
};

export const deleteCommentError = (error) => {
  return {
    type: types.DELETE_COMMENT_ERROR,
    payload: error
  };
};
