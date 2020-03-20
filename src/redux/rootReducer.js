import { combineReducers } from 'redux';

import newsReducer from './news/newsReducer';

export default combineReducers({
  news: newsReducer
});
