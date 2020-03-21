import React from 'react';

const Spinner = () => (
  <div className='m-auto text-center py-3'>
    <button className='btn btn-dark' type='button' disabled>
      <span
        className='spinner-border spinner-border-sm'
        role='status'
        aria-hidden='true'
      ></span>
      <span className='sr-only'>Loading...</span>
    </button>
  </div>
);

export default Spinner;
