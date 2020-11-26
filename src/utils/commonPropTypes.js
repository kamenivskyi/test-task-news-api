import PropTypes from 'prop-types';

export const newsShape = PropTypes.shape({
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  url: PropTypes.string,
  urlToImage: PropTypes.string,
  publishedAt: PropTypes.string,
  content: PropTypes.string
});
