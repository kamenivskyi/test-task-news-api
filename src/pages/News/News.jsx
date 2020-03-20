import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import NewsService from '../../services/newsService';
import CardItem from '../../components/CardItem';
import Spinner from '../../components/Spinner';

const News = props => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const { getNews } = new NewsService();

  useEffect(() => {
    setLoading(true);

    getNews().then(news => {
      setNews(news);
      setLoading(false);
    });
  }, []);

  const renderItems = news.map(item => <CardItem data={item} />);

  return (
    <>
      <h2 className='text-center'>News</h2>
      <div className='row'>{loading ? <Spinner /> : renderItems}</div>
    </>
  );
};

News.propTypes = {};

export default News;
