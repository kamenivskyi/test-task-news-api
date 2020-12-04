import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";

import { setAuthStatusFalse } from "redux/auth/authActions";
import { setItemToStorage } from "services/localStorageService";

import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();

  const renderLinks = links.map(({ label, linkTo, classes }) => (
    <li className={classes} key={label}>
      <NavLink exact className="nav-link" to={linkTo}>
        {label}
      </NavLink>
    </li>
  ));

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(setAuthStatusFalse());
    setItemToStorage("isAuthorized", false);
  };

  return (
    <header className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        Logo
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav w-100">{renderLinks}</ul>

        <a href="/login" onClick={handleLogout}>
          Logout
        </a>
      </div>
    </header>
  );
};

const links = [
  { label: "Home", linkTo: "/", classes: "nav-item" },
  { label: "News", linkTo: "/news", classes: "nav-item" },
  { label: "Profile", linkTo: "/profile", classes: "nav-item profile-link" },
  { label: "Login", linkTo: "/login", classes: "nav-item" },
];

Header.propTypes = {
  setAuthStatusFalse: PropTypes.func,
};

export default Header;
