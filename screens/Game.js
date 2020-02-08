import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Animated,
  TouchableOpacity,
  Easing,
  Dimensions,
  StyleSheet
} from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

import Wave from "react-native-waveview";

const Game = ({ navigation }) => {
  const [colors, setColors] = useState(navigation.getParam("colors"));
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [timePerMove, setTimePerMove] = useState(5000);
  const [timeRemaining, setTimeRemaining] = useState(5000);
  const [countdown, setCountdown] = useState(false);
  const [level, setLevel] = useState(1);
  const [heightAnimation, setHeightAnimation] = useState(
    new Animated.Value(Math.round(Dimensions.get("window").height))
  );
  const [turns, setTurns] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  // setColors();

  useEffect(() => {
    setCountdown(true);
    //changeColor();
  }, []);

  useEffect(() => {
    console.log("Run animation");
    if (gameStarted) {
      startAnimation();
    }
  }, [heightAnimation]);

  const changeColor = () => {
    if (!gameStarted) {
      setGameStarted(true);
      setLevel(1);
    }
    setTurns(turns + 1);

    if (turns % 10 == 0) {
      if (turns != 0) {
        setTimePerMove(timePerMove - 500);
        setLevel(level + 1);
      }
    }

    let newIndex = currentColorIndex;
    while (newIndex == currentColorIndex) {
      newIndex = Math.floor(Math.random() * colors.length);
      if (colors.length == 1) {
        break;
      }
    }

    setCurrentColorIndex(newIndex);

    heightAnimation.stopAnimation();
    setHeightAnimation(
      new Animated.Value(Math.round(Dimensions.get("window").height))
    );
  };

  const startAnimation = () => {
    Animated.timing(heightAnimation, {
      toValue: 0,
      duration: timePerMove,
      easing: Easing.linear
    }).start(({ finished }) => {
      if (finished) {
        console.log("PLAYER LOST");
        setGameStarted(false);
        navigation.navigate("GameOver", { color: colors[currentColorIndex] });
      } else {
        console.log(heightAnimation);
      }
    });
  };

  const countdown_finished = () => {
    setCountdown(false);
    changeColor();
  };

  const increaseSpeed = () => {
    if (timePerMove > 1000) {
      setTimePerMove(timePerMove - 500);
    } else {
      setTimePerMove(timePerMove / 2);
    }
  };

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: gameStarted ? "flex-end" : "center",
        alignItems: "center",
        backgroundColor: "white"
      }}
      onPress={changeColor}
      activeOpacity={1}
    >
      {gameStarted ? (
        <Animated.View
          style={{
            height: heightAnimation,
            width: vw(100),
            // backgroundColor: "red"
            backgroundColor: colors[currentColorIndex].hex,
            justifyContent: "flex-end",
            alignItems: "center",
            paddingBottom: 40
          }}
        >
          <Text>Level {level}</Text>
        </Animated.View>
      ) : (
        <Text>Click to Start</Text>
      )}
    </TouchableOpacity>
  );
};

export default Game;
