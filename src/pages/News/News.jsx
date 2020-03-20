import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getNewsList } from '../../redux/news/newsActions';

import { newsPropTypes } from '../../services/utils/newsPropTypes';

import CardItem from '../../components/CardItem';
import Spinner from '../../components/Spinner';

const News = ({ news, loading, getNewsList }) => {
  useEffect(() => {
    let isCurrent = true;

    if (isCurrent) {
      getNewsList();
    }

    return () => (isCurrent = false);
  }, []);

  const renderItems = news.map(item => (
    <CardItem data={item} key={item.title} />
  ));

  return (
    <>
      <h2 className='text-center'>News</h2>
      <div className='row'>{loading ? <Spinner /> : renderItems}</div>
    </>
  );
};

News.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape(newsPropTypes))
};

const mapStateToProps = ({ news: { news, loading } }) => ({
  news,
  loading
});

export default connect(mapStateToProps, { getNewsList })(News);
