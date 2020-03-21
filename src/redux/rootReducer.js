import { combineReducers } from 'redux';

import newsReducer from './news/newsReducer';
import authReducer from './auth/authReducer';

export default combineReducers({
  news: newsReducer,
  auth: authReducer
});
