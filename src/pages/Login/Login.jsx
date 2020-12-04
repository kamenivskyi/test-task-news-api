import React from "react";
import { useDispatch } from "react-redux";

import Form from "components/Form/Form";
import { setAuthStatusTrue } from "redux/auth/authActions";
import { setItemToStorage } from "services/localStorageService";
import { authStorageKey, loginIncorrectMessage } from "utils/config";

import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();

  const checkAuthData = (name, password) => {
    if (name === "admin" && password === "12345") {
      setItemToStorage(authStorageKey, true);
      dispatch(setAuthStatusTrue());
    } else {
      alert(loginIncorrectMessage);
    }
  };

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
