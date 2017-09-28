
import * as types from '../actions/actionTypes';

const initialState = {
  data: [],
  loading: false,
  error: null
};

function topicsReducer (prevState = initialState, topic) {

  if (!topic) return prevState;

  if (topic.type === types.FETCH_TOPICS_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (topic.type === types.FETCH_TOPICS_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.data = topic.payload;
    newState.loading = false;
    return newState;
  }

  if (topic.type === types.FETCH_TOPICS_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = topic.payload;
    newState.data = [];
    newState.loading = false;
    return newState;
  }
  return prevState;
}

export default topicsReducer;