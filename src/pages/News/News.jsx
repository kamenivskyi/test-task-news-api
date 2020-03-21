import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getNewsList } from '../../redux/news/newsActions';

import { newsPropTypes } from '../../services/utils/newsPropTypes';

import CardItem from '../../components/CardItem/CardItem';
import Spinner from '../../components/Spinner/Spinner';
import ExternalLink from '../../components/ExternalLink/ExternalLink';
import ErrorIndicator from '../../components/ErrorIndicator/ErrorIndicator';

const News = ({ news, loading, getNewsList, error }) => {
  useEffect(() => {
    let cancelled = false;

    if (!cancelled) {
      getNewsList();
    }

    return () => (cancelled = true);
  }, [getNewsList]);

  const renderItems = news.map(item => (
    <CardItem data={item} key={item.title} />
  ));

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <>
      <h2 className='text-center'>News</h2>
      <div className='row'>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {renderItems}
            <p className='text-center col-12 my-3'>
              NEWS API -
              <ExternalLink href='https://newsapi.org/'>
                https://newsapi.org/
              </ExternalLink>
            </p>
          </>
        )}
      </div>
    </>
  );
};

News.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape(newsPropTypes)),
  getNewsList: PropTypes.func.isRequired,
  loading: PropTypes.bool
};

const mapStateToProps = ({ news: { news, loading, error } }) => ({
  news,
  loading,
  error
});

export default connect(mapStateToProps, { getNewsList })(News);
