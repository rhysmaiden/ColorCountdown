import React, { useState, useEffect } from "react";
import NumericInput from "react-native-numeric-input";

const numberChanger = ({ currentValue, changeValue }) => {
  return (
    <NumericInput
      type="up-down"
      minValue={0}
      onChange={value => changeValue(value)}
    />
  );
};

export default numberChanger;
