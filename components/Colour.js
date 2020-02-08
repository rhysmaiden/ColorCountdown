import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

const colour = ({ id, hex, type }) => {
  return type == "square" ? (
    <View style={[{ backgroundColor: hex }, styles.square]}>
      <Text>{id}</Text>
    </View>
  ) : (
    <View style={[{ backgroundColor: hex }, styles.full]}>
      <Text>Colour</Text>
    </View>
  );
};

export default colour;

const styles = StyleSheet.create({
  square: {
    width: 80,
    height: 80,
    margin: 10
  },
  full: {
    flex: 1
  }
});
