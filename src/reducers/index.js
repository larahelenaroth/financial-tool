import { combineReducers } from 'redux';
import finReducer from './finReducer';

export default combineReducers({
  fin: finReducer
});
