import {
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  UPDATE_STREAM,
  DELETE_STREAM
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM:
    case CREATE_STREAM:
    case UPDATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      const newState = { ...state };
      delete newState[action.payload];
      return newState;
    case FETCH_STREAMS:
      return {
        ...state,
        ...action.payload.reduce((newState, stream) => {
          newState[stream.id] = stream;
          return newState;
        }, {})
      };

    default:
      return state;
  }
};
