import { View, Text, Button, StyleSheet } from "react-native";

export default function GameOverScreen({ route, navigation }) {
  const { userNumber } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Game Over 🎉</Text>
      <Text style={styles.result}>The number was: {userNumber}</Text>
      <Button title="Play Again" onPress={() => navigation.replace("Start")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 30, marginBottom: 20, color: "green" },
  result: { fontSize: 22, marginBottom: 20 },
});
