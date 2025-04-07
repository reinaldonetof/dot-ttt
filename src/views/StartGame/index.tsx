import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useGameConfig } from "../../storage/useGameConfig";
import { useGameRound } from "../../storage/useGameRound";

const StartGame = () => {
  const { setPlayer1, setPlayer2 } = useGameConfig();
  const { resetGameRound } = useGameRound();
  const navigation = useNavigation();

  const handleSelect = (
    mode: "pvp" | "player_vs_cpu" | "cpu_vs_player" | "cpu_vs_cpu",
  ) => {
    resetGameRound();
    if (mode === "pvp") {
      setPlayer1("person");
      setPlayer2("person");
    }
    if (mode === "player_vs_cpu") {
      setPlayer1("person");
      setPlayer2("cpu");
    }
    if (mode === "cpu_vs_player") {
      setPlayer1("cpu");
      setPlayer2("person");
    }
    if (mode === "cpu_vs_cpu") {
      setPlayer1("cpu");
      setPlayer2("cpu");
    }
    navigation.navigate("TTTGame");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Start Game</Text>
      <Text style={styles.subHeader}>Which type of game do you want?</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleSelect("pvp")}
      >
        <Text style={styles.buttonText}>👤 vs 👤</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleSelect("player_vs_cpu")}
      >
        <Text style={styles.buttonText}>👤 vs 🤖</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleSelect("cpu_vs_player")}
      >
        <Text style={styles.buttonText}>🤖 vs 👤</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleSelect("cpu_vs_cpu")}
      >
        <Text style={styles.buttonText}>🤖 vs 🤖</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 30,
    color: "#666",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
  },
});
