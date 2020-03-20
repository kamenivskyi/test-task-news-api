import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const renderLinks = links.map(({ label, linkTo }) => (
    <li className='nav-item' key={label}>
      <NavLink exact className='nav-link' to={linkTo}>
        {label}
      </NavLink>
    </li>
  ));

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
        <ul className='navbar-nav'>{renderLinks}</ul>
      </div>
    </header>
  );
};

const links = [
  { label: 'Home', linkTo: '/' },
  { label: 'News', linkTo: '/news' },
  { label: 'Profile', linkTo: '/profile' },
  { label: 'Login', linkTo: '/login' }
];

Header.propTypes = {};

export default Header;
