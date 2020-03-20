import Types from './newsTypes';

const initialState = {
  news: [],
  error: false,
  loading: false
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_NEWS_LIST:
      return {
        ...state,
        news: action.payload,
        loading: false
      };
    case Types.GET_NEWS_LIST_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      };
    case Types.GET_NEWS_LIST_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default newsReducer;
