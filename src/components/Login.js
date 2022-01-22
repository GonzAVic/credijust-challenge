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
    <div>
      lalala
      <Input label="firstName" formik={formik} />
      <Input label="lastName" formik={formik} />
      <Input label="email" formik={formik} />
      <Input label="phoneNumber" formik={formik} />
    </div>
  );
};

export default Login;
