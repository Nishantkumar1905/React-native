import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

export default function StartGameScreen({ navigation }) {
  const [userNumber, setUserNumber] = useState("");

  const handleStart = () => {
    const num = parseInt(userNumber);
    if (isNaN(num) || num <= 0 || num > 99) {
      Alert.alert("Invalid Number", "Please enter a number between 1 and 99");
      return;
    }
    navigation.navigate("Guess", { userNumber: num });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter a Number</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        maxLength={2}
        onChangeText={setUserNumber}
        value={userNumber}
      />
      <Button title="Start Game" onPress={handleStart} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 12 },
  input: {
    borderBottomWidth: 1,
    borderColor: "#666",
    padding: 8,
    width: 80,
    textAlign: "center",
    fontSize: 18,
    marginBottom: 20,
  },
});
