import React, { useState, useEffect } from "react";
import NumberChanger from "../components/NumberChanger";
import Colour from "../components/Colour";
import { View, Text, ScrollView } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
//import Button from "../components/Button.js";
import PrimaryButton from "../components/primaryButton.js";

const setup = ({ navigation }) => {
  const [colors, setColors] = useState([]);

  const availableColors = [
    "orange",
    "red",
    "lime",
    "cyan",
    "blue",
    "purple",
    "magenta",
    "yellow",
    "grey"
  ];

  const addPlayer = () => {
    let hex = "";

    // const hex = "#" + ((Math.random() * 0xffffff) << 0).toString(16);

    const newColor = { id: colors.length, hex: availableColors[colors.length] };

    setColors([...colors, newColor]);
  };

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 40,
        paddingBottom: 40,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white"
      }}
    >
      <View style={{ padding: 40 }}>
        <Text style={{ fontSize: 40, textAlign: "center" }}>
          Color Countdown
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Text style={{ padding: 20, fontSize: 20 }}>Players</Text>
        <NumberChanger
          changeValue={value => {
            console.log(value, colors.length);
            if (value < colors.length) {
              console.log(colors.slice(0, -1));
              setColors(colors.slice(0, -1));
            } else if (value != 0) {
              addPlayer();
            }
          }}
        />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          paddingTop: 40
        }}
      >
        {colors.map((color, index) => (
          <Colour key={index} id={color.length} hex={color.hex} type="square" />
        ))}
      </View>
      <View style={{ paddingBottom: 40 }}>
        <PrimaryButton
          text="Start Game"
          width="130"
          onPress={() => {
            colors.length > 1 && navigation.navigate("Game", { colors });
          }}
        />
      </View>
    </View>
  );
};

export default setup;
