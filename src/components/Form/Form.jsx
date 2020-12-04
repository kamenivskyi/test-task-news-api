import React from "react";
import { useFormik } from "formik";

const Form = ({ initialValues, checkData }) => {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: ({ name, password }) => {
      checkData(name, password);
    },
  });

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="name"
        autoFocus={true}
        value={values.name}
        onChange={handleChange}
        required
      />

      <input
        type="password"
        className="form-control my-3"
        placeholder="Password"
        name="password"
        value={values.password}
        onChange={handleChange}
        required
      />
      <button className="btn btn-lg btn-dark btn-block" type="submit">
        Sign in
      </button>
    </form>
  );
};

export default Form;
