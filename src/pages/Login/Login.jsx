import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { setAuthStatusTrue } from '../../redux/auth/authActions';

class Login extends React.Component {
  state = {
    userName: '',
    userPassword: '',
    isLoggedIn: null
  };

  componentDidMount() {}

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    const { userName, userPassword } = this.state;

    this.checkAuthData(userName, userPassword);

    this.setState({ userName: '', userPassword: '' });
  };

  checkAuthData = (name, password) => {
    if (name === 'admin' && password === '12345') {
      this.props.setAuthStatusTrue();
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
        <h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>

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

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps, { setAuthStatusTrue })(Login);
