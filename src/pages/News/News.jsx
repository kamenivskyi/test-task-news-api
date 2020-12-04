import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewsList } from "redux/news/newsActions";

import CardItem from "components/CardItem/CardItem";
import Spinner from "components/Spinner/Spinner";
import ExternalLink from "components/ExternalLink/ExternalLink";
import ErrorIndicator from "components/ErrorIndicator/ErrorIndicator";

const News = () => {
  const { news, loading, error } = useSelector(({ newsData }) => ({
    news: newsData.news,
    loading: newsData.loading,
    error: newsData.error,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsList());
  }, [dispatch, getNewsList]);
  console.log(news);

  const renderItems = news.map((item) => (
    <CardItem data={item} key={item.title} />
  ));

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <>
      <h2 className="text-center">News</h2>
      <div className="row">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {renderItems}
            <p className="text-center col-12 my-3">
              NEWS API -
              <ExternalLink href="https://newsapi.org/">
                https://newsapi.org/
              </ExternalLink>
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default News;
