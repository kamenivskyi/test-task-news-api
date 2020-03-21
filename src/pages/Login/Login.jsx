import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { setAuthStatusTrue } from '../../redux/auth/authActions';

import {
  getItemFromStorage,
  setItemToStorage
} from '../../services/utils/localStorage';

class Login extends React.Component {
  state = {
    userName: '',
    userPassword: ''
  };

  static propTypes = {
    setAuthStatusTrue: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
  };

  componentDidMount() {
    if (getItemFromStorage('isAuthorized')) {
      this.props.setAuthStatusTrue();
    }

    window.addEventListener('storage', this.handleStorageChanges);
  }

  componentWillUnmount() {
    window.removeEventListener('storage', this.handleStorageChanges);
  }

  handleStorageChanges = () => {
    if (getItemFromStorage('isAuthorized')) {
      console.log('login storage changes');
      this.props.setAuthStatusTrue();
    }
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    const { userName, userPassword } = this.state;

    this.checkAuthData(userName, userPassword);
  };

  checkAuthData = (name, password) => {
    if (name === 'admin' && password === '12345') {
      setItemToStorage('isAuthorized', true);
      this.props.setAuthStatusTrue();

      this.setState({ userName: '', userPassword: '' });
    } else {
      alert('The username or password you entered is incorrect');
    }
  };

  render() {
    const { userName, userPassword } = this.state;
    const { isLoggedIn } = this.props;

    if (isLoggedIn) {
      return <Redirect to='/profile' />;
    }

    return (
      <form
        className='form-signin m-auto'
        style={{ maxWidth: '320px' }}
        onSubmit={this.handleSubmitForm}
      >
        <h1 className='h3 mb-3'>Please sign in</h1>

        <input
          type='text'
          className='form-control'
          placeholder='Username'
          name='userName'
          autoFocus={true}
          value={userName}
          onChange={this.handleInputChange}
          required
        />

        <input
          type='password'
          className='form-control my-3'
          placeholder='Password'
          name='userPassword'
          value={userPassword}
          onChange={this.handleInputChange}
          required
        />
        <button className='btn btn-lg btn-dark btn-block' type='submit'>
          Sign in
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ auth: { isLoggedIn } }) => ({
  isLoggedIn
});

export default connect(mapStateToProps, { setAuthStatusTrue })(Login);
