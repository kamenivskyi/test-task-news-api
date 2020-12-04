import React from "react";
import { useDispatch } from "react-redux";

import { setAuthStatusTrue } from "redux/auth/authActions";
import { setItemToStorage } from "services/localStorageService";
import Form from "components/Form/Form";

import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();

  const checkAuthData = (name, password) => {
    if (name === "admin" && password === "12345") {
      setItemToStorage("isAuthorized", true);
      dispatch(setAuthStatusTrue());
    } else {
      alert("The username or password you entered is incorrect");
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
