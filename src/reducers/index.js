import { combineReducers } from 'redux';
import finReducer from './finReducer';

/* 
  Combine reducers
*/

export default combineReducers({
  fin: finReducer
});
