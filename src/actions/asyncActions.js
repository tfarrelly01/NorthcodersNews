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
};

// GET api/articles
export const fetchArticles = () => {
  return dispatch => {
    dispatch(actions.fetchArticlesRequest());
    axios.get(`${ROOT}/articles`)
      .then(res => {
        dispatch(actions.fetchArticlesSuccess(res.data.articles));
      })
      .catch(err => {
        dispatch(actions.fetchArticlesError(err));
      });
  };
};

// GET api/users
export const fetchUsers = () => {
  return dispatch => {
    dispatch(actions.fetchUsersRequest());
    axios.get(`${ROOT}/users`)
      .then(res => {
        dispatch(actions.fetchUsersSuccess(res.data.users));
      })
      .catch(err => {
        dispatch(actions.fetchUsersError(err));
      });
  };
};

// GET api/topics/:topic_slug/articles
export const fetchTopicArticles = (topicSlug) => {
  return dispatch => {
    dispatch(actions.fetchTopicArticlesRequest());
    axios.get(`${ROOT}/topics/${topicSlug}/articles`)
      .then(res => {
        dispatch(actions.fetchTopicArticlesSuccess(res.data.articles));
      })
      .catch(err => {
        dispatch(actions.fetchTopicArticlesError(err));
      });
  };
};

// GET api/articles/:article_id
export const fetchArticle = (articleId) => {
  return dispatch => {
    dispatch(actions.fetchArticleRequest());
    axios.get(`${ROOT}/articles/${articleId}`)
      .then(res => {
        dispatch(actions.fetchArticleSuccess(res.data.article));
      })
      .catch(err => {
        dispatch(actions.fetchArticleError(err));
      });
  };
};

// GET api/articles/:article_id/comments
export const fetchArticleComments = (articleId) => {
  return dispatch => {
    dispatch(actions.fetchArticleCommentsRequest());
    axios.get(`${ROOT}/articles/${articleId}/comments`)
      .then(res => {
        dispatch(actions.fetchArticleCommentsSuccess(res.data.comments));
      })
      .catch(err => {
        dispatch(actions.fetchArticleCommentsError(err));
      });
  };
};

// POST api/articles/:article_id/comments
export const addComment = (articleId, comment) => {
console.log('addComment CALLED ');
console.log('articleId:', articleId);
console.log('comment:', comment);
  return dispatch => {
    dispatch(actions.addCommentRequest());
    console.log('AFTER addCommentRequest()')
    axios.post(`${ROOT}/articles/${articleId}/comments`, { body: comment })
      .then(res => {
        dispatch(actions.addCommentSuccess(res.data.comment));
        console.log('res.data.comment:', res.data.comment);

      })
      .catch(err => {
        dispatch(actions.addCommentError(err));
      });
  };
};


