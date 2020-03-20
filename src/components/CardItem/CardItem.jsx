import React from 'react';
import PropTypes from 'prop-types';

const CardItem = ({ data }) => {
  const { title, description, author, url, urlToImage, publishedAt } = data;

  if (!data) return null;

  console.log(data);
  return (
    <div className='col-lg-3 mt-2'>
      <div className='card' style={{ maxWidth: '18rem' }}>
        <img
          src={urlToImage}
          className='card-img-top'
          alt={title}
          style={{ height: '150px' }}
        />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{description}</p>
        </div>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>Author: {author}</li>
          <li className='list-group-item'>Published at: {publishedAt}</li>
        </ul>
        <div className='card-body'>
          <a href={url} className='card-link'>
            Link
          </a>
        </div>
      </div>
    </div>
  );
};

CardItem.propTypes = {};

export default CardItem;
