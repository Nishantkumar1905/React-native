import React, { useEffect, useState } from "react";
import { View, Text, Button, Alert, StyleSheet } from "react-native";

export default function GuessScreen({ route, navigation }) {
  const userNumber = route.params.userNumber;
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(99);
  const [guess, setGuess] = useState(null);

  // Generate a guess between min and max
  const generateGuess = (minVal, maxVal) => {
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
  };

  // Generate initial guess on first render
  useEffect(() => {
    const initialGuess = generateGuess(1, 99);
    setGuess(initialGuess);
  }, []);

  // Check if app guessed the number
  useEffect(() => {
    if (guess === userNumber) {
      Alert.alert("🎉 Guessed it right!");
      navigation.navigate("GameOver", { userNumber });
    }
  }, [guess]);

  const handleLower = () => {
    if (userNumber >= guess) {
      Alert.alert("Don't cheat!", "You said it was lower, but it's not.");
      return;
    }
    const newMax = guess - 1;
    setMax(newMax);
    setGuess(generateGuess(min, newMax));
  };

  const handleHigher = () => {
    if (userNumber <= guess) {
      Alert.alert("Don't cheat!", "You said it was higher, but it's not.");
      return;
    }
    const newMin = guess + 1;
    setMin(newMin);
    setGuess(generateGuess(newMin, max));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opponent's Guess</Text>
      <Text style={styles.guess}>{guess}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Lower" onPress={handleLower} />
        <Button title="Higher" onPress={handleHigher} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 20 },
  guess: { fontSize: 40, fontWeight: "bold", color: "blue" },
  buttonContainer: {
    flexDirection: "row",
    gap: 20,
    marginTop: 30,
    justifyContent: "space-around",
    width: "80%",
  },
});
