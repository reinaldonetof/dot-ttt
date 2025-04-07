import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PlayersSymbolContainer from "../../molecules/PlayersSymbolContainer";
import { useGameRound } from "../../../../storage/useGameRound";
import { useDimensions } from "../../../../hooks/useDimensions";

const TTTFooter = () => {
  const { isPortrait } = useDimensions();
  const { resetGameRound, winner } = useGameRound();

  return (
    <View
      style={{
        ...styles.container,
        ...(!isPortrait && styles.containerLandscape),
      }}
    >
      <PlayersSymbolContainer />
      <TouchableOpacity
        disabled={!winner}
        onPress={resetGameRound}
        style={{
          ...styles.button,
          opacity: winner ? 1 : 0.5,
        }}
      >
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
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginVertical: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
});
