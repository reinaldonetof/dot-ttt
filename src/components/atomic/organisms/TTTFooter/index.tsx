import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PlayersSymbolContainer from "../../molecules/PlayersSymbolContainer";
import { useGameRound } from "../../../../storage/useGameRound";
import { useDimensions } from "../../../../hooks/useDimensions";

const TTTFooter = () => {
  const { isPortrait } = useDimensions();
  const { resetGameRound } = useGameRound();

  return (
    <View
      style={{
        ...styles.container,
        ...(!isPortrait && styles.containerLandscape),
      }}
    >
      <PlayersSymbolContainer />
      <TouchableOpacity onPress={resetGameRound} style={styles.button}>
        <Text>Reset Game</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TTTFooter;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 24,
  },
  containerLandscape: {
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "#e4effa",
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
  },
});
