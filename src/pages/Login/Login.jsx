import React from 'react';
import PropTypes from 'prop-types';

const Login = props => {
  return (
    <form className='form-signin m-auto' style={{ maxWidth: '320px' }}>
      <h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
      <label htmlFor='inputEmail' className='sr-only'>
        Email address
      </label>
      <input
        type='email'
        id='inputEmail'
        className='form-control'
        placeholder='Email address'
        required=''
        autoFocus=''
      />
      <label htmlFor='inputPassword' className='sr-only'>
        Password
      </label>
      <input
        type='password'
        id='inputPassword'
        className='form-control my-3'
        placeholder='Password'
        required=''
      />
      <button className='btn btn-lg btn-primary btn-block' type='submit'>
        Sign in
      </button>
    </form>
  );
};

Login.propTypes = {};

export default Login;
