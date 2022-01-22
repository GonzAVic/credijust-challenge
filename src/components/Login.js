import React from "react";
import { useFormik } from "formik";

// COMPONENTS
import Input from "./Input";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="login">
      <form onSubmit={formik.handleSubmit}>
        <Input label="First Name" name="firstName" formik={formik} />
        <Input label="Last Name" name="lastName" formik={formik} />
        <Input label="Email" name="email" formik={formik} />
        <Input label="Phone Number" name="phoneNumber" formik={formik} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
