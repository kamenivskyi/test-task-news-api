import React from 'react';
import PropTypes from 'prop-types';
import { newsPropTypes } from '../../services/utils/newsPropTypes';
import ExternalLink from '../ExternalLink/ExternalLink';

const CardItem = ({ data }) => {
  const {
    title,
    description,
    author,
    url,
    urlToImage,
    publishedAt,
    content
  } = data;

  if (!data) return null;

  const reserveImg = 'https://via.placeholder.com/150.jpg/';

  return (
    <div className='col-sm-6 col-md-4 col-lg-3 mt-2'>
      <div className='card'>
        <img
          src={urlToImage || reserveImg}
          className='card-img-top'
          alt={title || ''}
          style={{ height: '150px', objectFit: 'cover' }}
        />
        <div className='card-body'>
          {title && <h5 className='card-title'>{title}</h5>}
          {description && <p className='card-text'>{description}</p>}
          {content && <p className='card-text'>{content}</p>}
        </div>
        <ul className='list-group list-group-flush'>
          {author && <li className='list-group-item'>Author: {author}</li>}
          {publishedAt && (
            <li className='list-group-item'>Published at: {publishedAt}</li>
          )}
        </ul>
        {url && (
          <div className='card-body'>
            <ExternalLink href={url} className='card-link'>
              Link
            </ExternalLink>
          </div>
        )}
      </div>
    </div>
  );
};

CardItem.propTypes = {
  data: PropTypes.shape(newsPropTypes)
};

export default CardItem;
