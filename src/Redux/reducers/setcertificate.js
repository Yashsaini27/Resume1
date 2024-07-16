import initialState from './initialState.json';
import { SET_CERTIFICATES, UPDATE_CERTIFICATES } from '../actions/actions';

const certificateReducer = (state = initialState.certificates, action) => {
  switch (action.type) {
    case SET_CERTIFICATES:
      return action.payload; // Replace state with the new certificates
    case UPDATE_CERTIFICATES:
      return { ...state, ...action.payload }; // Merge the payload with the current state
    default:
      return state;
  }
};

export default certificateReducer;
