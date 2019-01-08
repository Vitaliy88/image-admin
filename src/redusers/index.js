import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { addImageReducer } from './images';

export default combineReducers({
  routing: routerReducer,
  addImageReducer,
})
