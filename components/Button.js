import React, { useState, useEffect } from "react";
import { Button } from "react-native-material-ui";

const button = ({ text, onPress }) => {
  return <Button raised primary text={text} onPress={onPress} />; // flat button with primary color;
};

export default Button;
