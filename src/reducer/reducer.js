import * as types from '../actions/actionTypes';
import INITIAL_STATE from './INITIAL_STATE';

function reducer (prevState = INITIAL_STATE, action) {

  if (!action) return prevState;

  if (action.type === types.FETCH_TOPICS_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_TOPICS_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.data = action.payload;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_TOPICS_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.payload;
    newState.data = [];
    newState.loading = false;
    return newState;
  }
  return prevState;
}

 export default reducer;