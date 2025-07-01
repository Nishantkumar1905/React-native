import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartGameScreen from "./Screens/StartGameScreen";
import GuessScreen from "./Screens/GuessScreen";      // ✅ Make sure this line is correct
import GameOverScreen from "./Screens/GameOverScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartGameScreen} />
        <Stack.Screen name="Guess" component={GuessScreen} />
        <Stack.Screen name="GameOver" component={GameOverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
