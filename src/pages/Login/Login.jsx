import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  setAuthStatusTrue,
  setAuthStatusFalse,
} from "../../redux/auth/authActions";
import { getItemFromStorage, setItemToStorage } from "../../utils/localStorage";

import "./Login.css";

const Login = () => {
  const [formState, setFormState] = useState({ name: "", password: "" });
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector(({ authData }) => authData);
  const { name, password } = formState;

  useEffect(() => {
    if (getItemFromStorage("isAuthorized")) {
      dispatch(setAuthStatusTrue());
    } else if (!getItemFromStorage("isAuthorized")) {
      dispatch(setAuthStatusFalse);
    }
  }, []);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    checkAuthData(name, password);
  };

  const checkAuthData = (name, password) => {
    if (name === "admin" && password === "12345") {
      setItemToStorage("isAuthorized", true);
      dispatch(setAuthStatusTrue());

      setFormState({ ...formState, name: "", password: "" });
    } else {
      alert("The username or password you entered is incorrect");
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/profile" />;
  }

  return (
    <>
      <h1 className="login-title">Please sign in</h1>
      <form className="login-form" onSubmit={handleSubmitForm}>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          name="name"
          autoFocus={true}
          value={name}
          onChange={handleInputChange}
          required
        />

        <input
          type="password"
          className="form-control my-3"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
          required
        />
        <button className="btn btn-lg btn-dark btn-block" type="submit">
          Sign in
        </button>
      </form>
    </>
  );
};
export default Login;
