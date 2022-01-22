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
      localStorage.setItem("userData", JSON.stringify(values));
      navigate("/comparator")
    },
  });

  return (
    <Layout>
      <div className="login">
        <form onSubmit={formik.handleSubmit}>
          <Input label="First Name" name="firstName" formik={formik} />
          <Input label="Last Name" name="lastName" formik={formik} />
          <Input label="Email" name="email" formik={formik} />
          <Input label="Phone Number" name="phoneNumber" formik={formik} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
