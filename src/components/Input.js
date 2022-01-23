import React from "react";
import PropTypes from "prop-types";

import Text from "./Text";

const Input = ({
  label,
  name,
  id,
  type,
  formik,
  onChange,
  value,
  ...props
}) => {
  return (
    <>
      <Text as="label">{label}</Text>
      <input
        id={id || name}
        name={name}
        type={type}
        onChange={onChange || formik.handleChange}
        value={value !== null ? value : formik.values[name]}
        {...props}
      />
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  formik: PropTypes.shape({}).isRequired,
};

Input.defaultProps = {
  type: "text",
  formik: {},
};

export default Input;
