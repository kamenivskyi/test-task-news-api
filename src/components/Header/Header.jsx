import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { setAuthStatusFalse } from '../../redux/auth/authActions';

const Header = ({ setAuthStatusFalse }) => {
  const renderLinks = links.map(({ label, linkTo, style }) => (
    <li className='nav-item' key={label} style={style}>
      <NavLink exact className='nav-link' to={linkTo}>
        {label}
      </NavLink>
    </li>
  ));

  const handleLogout = () => {
    setAuthStatusFalse();
    localStorage.setItem('isAuthorized', JSON.stringify(false));
  };

  return (
    <header className='navbar navbar-expand-lg navbar-light bg-light'>
      <NavLink to='/' className='navbar-brand'>
        Logo
      </NavLink>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav w-100'>{renderLinks}</ul>

        <div className='nav-link' onClick={handleLogout}>
          Logout
        </div>
      </div>
    </header>
  );
};

const links = [
  { label: 'Home', linkTo: '/' },
  { label: 'News', linkTo: '/news' },
  { label: 'Profile', linkTo: '/profile', style: { marginLeft: 'auto' } },
  { label: 'Login', linkTo: '/login' }
];

Header.propTypes = {};

export default connect(null, { setAuthStatusFalse })(Header);
