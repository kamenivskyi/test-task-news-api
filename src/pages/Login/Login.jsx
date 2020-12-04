import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { setAuthStatusTrue } from "../../redux/auth/authActions";
import { setItemToStorage } from "../../utils/localStorage";
import Form from "../../components/Form/Form";

import "./Login.css";

const Login = () => {
  const { isLoggedIn } = useSelector(({ authData }) => authData);
  const dispatch = useDispatch();

  const checkAuthData = (name, password) => {
    if (name === "admin" && password === "12345") {
      setItemToStorage("isAuthorized", true);
      dispatch(setAuthStatusTrue());
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
      <Form
        initialValues={{
          name: "",
          password: "",
        }}
        checkData={checkAuthData}
      />
    </>
  );
};

export default Login;
