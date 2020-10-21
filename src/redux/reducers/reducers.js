// import { combineReducers } from 'redux';
import { HELLO } from './../constants';

// const rootReducer = combineReducers({
//   
// });

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case HELLO:
      return console.log('Hello');
    default:
      return state;
  }
};

export default rootReducer;
