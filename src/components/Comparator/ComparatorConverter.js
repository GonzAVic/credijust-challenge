import React, { useEffect } from "react";
import { useFormik } from "formik";

// COMPONENTS
import Input from "../Input";
import Text from "../Text";

const ComparatorConverter = ({ currentCoinValue }) => {
  const formik = useFormik({
    initialValues: {
      mxn: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const displayConvertions = () => {
    const convertions = [];
    for (const provider in currentCoinValue) {
      const coinInUSD = currentCoinValue[provider] * 20;
      convertions.push(
        <div key={provider} className="comparator-convert--item">
          <Text as="label">{provider}</Text>
          <Text>{(formik.values.mxn / coinInUSD).toFixed(12)}</Text>
        </div>
      );
    }
    return convertions;
  };

  return (
    <div className="comparator-convert">
      <Input label="Convert MXN" type="number" name="mxn" formik={formik} />
      {displayConvertions()}
    </div>
  );
};

export default ComparatorConverter;
