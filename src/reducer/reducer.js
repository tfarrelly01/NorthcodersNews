import * as types from '../actions/actionTypes';
import INITIAL_STATE from './INITIAL_STATE';

function reducer (prevState = INITIAL_STATE, action) {

  if (!action) return prevState;

  // FETCH TOPICS
  if (action.type === types.FETCH_TOPICS_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_TOPICS_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.topics = action.payload;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_TOPICS_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.payload;
    newState.topics = [];
    newState.loading = false;
    return newState;
  }

  // FETCH ARTICLES AND FETCH TOPIC ARTICLES
  if (action.type === types.FETCH_ARTICLES_REQUEST ||
      action.type === types.FETCH_TOPIC_ARTICLES_REQUEST) 
  {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLES_SUCCESS ||
      action.type === types.FETCH_TOPIC_ARTICLES_SUCCESS) 
  {
    const newState = Object.assign({}, prevState);
    newState.articles = action.payload;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLES_ERROR ||
      action.type === types.FETCH_TOPIC_ARTICLES_ERROR) 
  {
    const newState = Object.assign({}, prevState);
    newState.error = action.payload;
    newState.articles = [];
    newState.loading = false;
    return newState;
  }

  // FETCH USERS
  if (action.type === types.FETCH_USERS_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_USERS_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.users = action.payload;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_USERS_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.payload;
    newState.users = [];
    newState.loading = false;
    return newState;
  }

  // FETCH ARTICLE
  if (action.type === types.FETCH_ARTICLE_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLE_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.article = Object.assign({}, action.payload);
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLE_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.payload;
    newState.article = {};
    newState.loading = false;
    return newState;
  }

  // FETCH ARTICLE COMMENTS
  if (action.type === types.FETCH_ARTICLE_COMMENTS_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLE_COMMENTS_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.comments = action.payload;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLE_COMMENTS_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.payload;
    newState.comments = [];
    newState.loading = false;
    return newState;
  }

    // ADD COMMENT TO ARTICLE
  if (action.type === types.ADD_COMMENT_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.ADD_COMMENT_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.comments.push(action.payload);
    newState.comment = action.payload;
console.log('action.payload:', action.payload);
console.log('newState.comment:', newState.comment);
console.log('newState.comments:', newState.comments);
    newState.loading = false;
    return newState;
  }

  if (action.type === types.ADD_COMMENT_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.payload;
    newState.comment = {}
    newState.loading = false;
    return newState;
  }

  return prevState;
}

 export default reducer;