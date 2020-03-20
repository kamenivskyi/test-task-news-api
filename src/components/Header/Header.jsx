import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='navbar navbar-expand-lg navbar-light bg-light'>
      <a className='navbar-brand' href='#'>
        Logo
      </a>
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
        <ul className='navbar-nav'>
          {links.map(({ label, linkTo }) => (
            <li className='nav-item' key={label}>
              <NavLink className='nav-link' to={linkTo}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

const links = [
  { label: 'Home', linkTo: '/' },
  { label: 'News', linkTo: '/news' }
];

Header.propTypes = {};

export default Header;
