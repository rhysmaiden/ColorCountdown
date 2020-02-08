import React, { useState, useEffect } from "react";
import { Button, View } from "react-native";

const home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button
        onPress={() => {
          navigation.navigate("Setup", {});
        }}
        title="SETUP"
      />
    </View>
  );
};

export default home;
