import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import NewsService from '../../services/newsService';

const News = props => {
  const { getNews } = new NewsService();

  useEffect(() => {
    getNews();
  }, []);
  return <div>News page</div>;
};

News.propTypes = {};

export default News;
