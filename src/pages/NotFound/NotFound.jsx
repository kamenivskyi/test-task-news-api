import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = props => {
  const notFoundImg =
    'https://klondike-studio.ru/images/wiki/development/error-404-page.jpg';

  return (
    <div className='text-center'>
      <h2 className='py-2'>Not found 404</h2>
      <img className='text-center' src={notFoundImg} alt='' />
      <Link
        to='/'
        style={{
          display: 'block',
          margin: '20px auto'
        }}
      >
        <button type='button' className='btn btn-dark'>
          Back to home page
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
