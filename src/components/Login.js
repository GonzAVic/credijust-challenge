import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

// COMPONENTS
import Input from "./Input";
import Layout from "../layouts/Layout";

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    onSubmit: (values) => {
      if (
        !values.firstName ||
        !values.email ||
        !values.phoneNumber ||
        !values.lastName
      ) {
        return;
      }
      localStorage.setItem("userData", JSON.stringify(values));
      navigate("/comparator");
    },
  });

  return (
    <Layout>
      <div className="login">
        <form onSubmit={formik.handleSubmit}>
          <Input
            data-tid="firstName-input"
            label="First Name"
            name="firstName"
            formik={formik}
            required
          />
          <Input
            data-tid="lastName-input"
            label="Last Name"
            name="lastName"
            formik={formik}
            required
          />
          <Input
            data-tid="email-input"
            label="Email"
            name="email"
            formik={formik}
            required
          />
          <Input
            data-tid="phoneNumber-input"
            label="Phone Number"
            name="phoneNumber"
            formik={formik}
            required
          />
          <button data-tid="login-submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
