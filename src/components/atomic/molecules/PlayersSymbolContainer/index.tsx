import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useGameConfig } from "../../../../storage/useGameConfig";

const PlayersSymbolContainer = () => {
  const { player1Symbol, player2Symbol } = useGameConfig();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Symbols</Text>
      <Text style={styles.text}>Player 1: {player1Symbol}</Text>
      <Text style={styles.text}>Player 2: {player2Symbol}</Text>
    </View>
  );
};

export default PlayersSymbolContainer;

const styles = StyleSheet.create({
  container: {
    gap: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#e4effa",
    fontSize: 24,
  },
});
