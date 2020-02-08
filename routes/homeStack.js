import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import home from "../screens/home";
import Setup from "../screens/setup";
import Game from "../screens/Game";
import gameOver from "../screens/gameOver";

const screens = {
  Setup: {
    screen: Setup,
    headerMode: "none"
  },
  Game: {
    screen: Game,
    headerMode: "none"
  },
  GameOver: {
    screen: gameOver,
    headerMode: "none"
  }
};

const HomeStack = createStackNavigator(screens, {
  mode: "modal",
  headerMode: "none"
});

export default createAppContainer(HomeStack);
