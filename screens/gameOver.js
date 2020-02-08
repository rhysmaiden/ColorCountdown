import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Button from "../components/Button.js";
import PrimaryButton from "../components/primaryButton.js";

const gameOver = ({ navigation }) => {
  const [color, setColor] = useState(navigation.getParam("color"));
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: color.hex
      }}
    >
      <View style={{ backgroundColor: "black", padding: 20 }}>
        <Text style={{ fontSize: 40, textAlign: "center", color: "white" }}>
          Game Over
        </Text>
      </View>
      <View>
        <PrimaryButton text="Restart" onPress={() => navigation.pop()} />
        <PrimaryButton
          text="Change Players"
          onPress={() => navigation.pop(2)}
        />
      </View>
    </View>
  );
};

export default gameOver;
