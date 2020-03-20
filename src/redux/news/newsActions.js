import Types from './newsTypes';

import NewsService from '../../services/newsService';

const { getNews } = new NewsService();

export const getNewsList = () => async dispatch => {
  try {
    dispatch(setLoading());

    const data = await getNews();

    console.log(data);

    dispatch({ type: Types.GET_NEWS_LIST, payload: data });
  } catch (error) {
    dispatch({
      type: Types.GET_NEWS_LIST_ERROR,
      payload: error.response
    });
  }
};

const setLoading = () => ({ type: Types.GET_NEWS_LIST_LOADING });
