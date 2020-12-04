import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { setAuthStatusTrue } from '../../redux/auth/authActions';

import {
  getItemFromStorage,
  setItemToStorage
} from '../../utils/localStorage';

import './Login.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Login = () => {
  const [formState, setFormState] = useState({ name: '', password: '' });
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector(({ authData }) => authData);
  const { name, password } = formState;

  useEffect(() => {
    if (getItemFromStorage('isAuthorized')) {
    
      dispatch(setAuthStatusTrue());
    }
  }, []);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({
      ...formState,
      [name]: value
    });
  };  

  const handleSubmitForm = event => {
    event.preventDefault();
    checkAuthData(name, password);
  };

  const checkAuthData = (name, password) => {
    if (name === 'admin' && password === '12345') {
      setItemToStorage('isAuthorized', true);
      dispatch(setAuthStatusTrue());

      setFormState({ ...formState, name: '', password: '' });
    } else {
      alert('The username or password you entered is incorrect');
    }
  };

    if (isLoggedIn) {
      return <Redirect to='/profile' />;
    }

    return (
      <form
        className='login-form'
        onSubmit={handleSubmitForm}
      >
        <h1 className='login-title'>Please sign in</h1>

        <input
          type='text'
          className='form-control'
          placeholder='Username'
          name='name'
          autoFocus={true}
          value={name}
          onChange={handleInputChange}
          required
        />

        <input
          type='password'
          className='form-control my-3'
          placeholder='Password'
          name='password'
          value={password}
          onChange={handleInputChange}
          required
        />
        <button className='btn btn-lg btn-dark btn-block' type='submit'>
          Sign in
        </button>
      </form>
    );
}
export default Login;