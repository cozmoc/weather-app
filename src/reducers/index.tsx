import { combineReducers } from 'redux';
import weather from './weather';

// Scale features with modules
export default combineReducers({
  weather,
});
